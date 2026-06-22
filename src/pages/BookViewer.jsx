import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL;

const BookViewer = () => {
    const { id } = useParams()
    const [book, setBook] = useState({ image: [] })
    const [readerPages, setReaderPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [zoom, setZoom] = useState(100);
    const [pageNos, setPageNos] = useState([1, 2, 3, 4]);
    const [totalPages, setTotalPages] = useState(null);
    const [isLoadingPages, setIsLoadingPages] = useState(false);
    const [hasMorePages, setHasMorePages] = useState(true);
    const readerRootRef = useRef(null);
    const pageRefs = useRef([]);
    const viewerRef = useRef(null);

    const fetchBook = useCallback(async () => {
        try {
            const { data } = await axios.get(`/api/book/bookReader/${id}`)
            if (data.success) {
                setBook(data.book)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }, [id])

    const normalizePageImage = (page) => {
        if (typeof page === "string") return page;
        return page?.image || page?.imageUrl || page?.url || page?.path || page?.src || "";
    };

    const getPageImageSrc = (image) => {
        if (!image) return "";
        if (image.startsWith("http") || image.startsWith("data:")) return image;
        if (!image.startsWith("/")) return `data:image/png;base64,${image}`;
        return `${baseURL}${image}`;
    };

    const getPageNumber = (page, fallbackPageNumber) => {
        if (typeof page === "object" && page !== null) {
            return page.pageNo || page.pageNumber || page.page || page.number || fallbackPageNumber;
        }
        return fallbackPageNumber;
    };

    const buildPageNos = (startPage) => {
        return Array.from({ length: 4 }, (_, index) => startPage + index);
    };

    const fetchBookPages = useCallback(async (requestedPageNos = [1, 2, 3, 4], focusPage = requestedPageNos[0]) => {
        try {
            setIsLoadingPages(true);
            const { data } = await axios.post("/api/book/getbookPages", {
                bookId: id,
                pages: requestedPageNos,
            })
            if (data.success) {
                const apiPages = data.pages || data.bookPages || data.images || data.pageImages || data.book?.pages || [];
                const formattedPages = apiPages
                    .map((page, index) => ({
                        pageNumber: getPageNumber(page, requestedPageNos[index]),
                        image: normalizePageImage(page),
                    }))
                    .filter((page) => page.image);

                setReaderPages(formattedPages);
                setPageNos(requestedPageNos);
                setCurrentPage(focusPage);
                setHasMorePages(formattedPages.length === requestedPageNos.length);

                if (data.totalPages || data.total_pages || data.pageCount || data.total) {
                    setTotalPages(data.totalPages || data.total_pages || data.pageCount || data.total);
                }

                setTimeout(() => {
                    pageRefs.current[formattedPages.findIndex((page) => page.pageNumber === focusPage)]?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 50);
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsLoadingPages(false);
        }
    }, [id]);

    useEffect(() => {
        fetchBook()
    }, [fetchBook]);

    useEffect(() => {
        fetchBookPages([1, 2, 3, 4], 1)
    }, [fetchBookPages]);

    useEffect(() => {
        const blockReaderCopyActions = (event) => {
            if (readerRootRef.current?.contains(event.target)) {
                event.preventDefault();
            }
        };

        const blockReaderShortcuts = (event) => {
            const key = event.key.toLowerCase();
            if ((event.ctrlKey || event.metaKey) && ["c", "s", "p", "u"].includes(key)) {
                event.preventDefault();
            }
        };

        document.addEventListener("contextmenu", blockReaderCopyActions);
        document.addEventListener("copy", blockReaderCopyActions);
        document.addEventListener("cut", blockReaderCopyActions);
        document.addEventListener("dragstart", blockReaderCopyActions);
        document.addEventListener("keydown", blockReaderShortcuts);

        return () => {
            document.removeEventListener("contextmenu", blockReaderCopyActions);
            document.removeEventListener("copy", blockReaderCopyActions);
            document.removeEventListener("cut", blockReaderCopyActions);
            document.removeEventListener("dragstart", blockReaderCopyActions);
            document.removeEventListener("keydown", blockReaderShortcuts);
        };
    }, []);

    const scrollToPage = (pageNumber) => {
        const pageIndex = readerPages.findIndex((page) => page.pageNumber === pageNumber);
        const pageElement = pageRefs.current[pageIndex];
        if (pageElement) {
            pageElement.scrollIntoView({ behavior: "smooth", block: "start" });
            setCurrentPage(pageNumber);
        }
    };

    const loadPageSet = (startPage, focusPage = startPage) => {
        const safeStartPage = Math.max(1, startPage);
        fetchBookPages(buildPageNos(safeStartPage), focusPage);
    };

    const goToPreviousPage = () => {
        if (currentPage <= 1 || isLoadingPages) return;

        const previousPage = currentPage - 1;
        const pageExistsInCurrentSet = readerPages.some((page) => page.pageNumber === previousPage);

        if (pageExistsInCurrentSet) {
            scrollToPage(previousPage);
            return;
        }

        const previousSetStart = Math.max(1, pageNos[0] - 4);
        loadPageSet(previousSetStart, previousPage);
    };

    const goToNextPage = () => {
        if (isLoadingPages) return;
        if (totalPages && currentPage >= totalPages) return;

        const nextPage = currentPage + 1;
        const pageExistsInCurrentSet = readerPages.some((page) => page.pageNumber === nextPage);

        if (pageExistsInCurrentSet) {
            scrollToPage(nextPage);
            return;
        }

        if (hasMorePages) {
            loadPageSet(pageNos[0] + 4, nextPage);
        }
    };

    const updateCurrentPageOnScroll = (event) => {
        const viewerTop = viewerRef.current?.getBoundingClientRect().top || 0;
        let closestPage = readerPages[0]?.pageNumber || 1;
        let closestDistance = Number.POSITIVE_INFINITY;

        pageRefs.current.forEach((pageElement, index) => {
            if (!pageElement) return;
            const distance = Math.abs(pageElement.getBoundingClientRect().top - viewerTop - 16);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestPage = readerPages[index]?.pageNumber || closestPage;
            }
        });

        setCurrentPage(closestPage);

        if (event?.currentTarget) {
            const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
            const isNearBottom = scrollTop + clientHeight >= scrollHeight - 40;
            const lastLoadedPage = readerPages.at(-1)?.pageNumber || 1;

            if (isNearBottom && hasMorePages && !isLoadingPages && (!totalPages || lastLoadedPage < totalPages)) {
                loadPageSet(pageNos[0] + 4, pageNos[0] + 4);
            }
        }
    };

    const handleThumbnailScroll = (event) => {
        const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
        const isNearBottom = scrollTop + clientHeight >= scrollHeight - 12;

        if (isNearBottom && hasMorePages && !isLoadingPages) {
            loadPageSet(pageNos[0] + 4, pageNos[0] + 4);
        }
    };

    const handleThumbnailWheel = (event) => {
        if (isLoadingPages) return;
        const lastLoadedPage = readerPages.at(-1)?.pageNumber || 1;

        if (event.deltaY > 0 && hasMorePages && (!totalPages || lastLoadedPage < totalPages)) {
            loadPageSet(pageNos[0] + 4, pageNos[0] + 4);
        }

        if (event.deltaY < 0 && pageNos[0] > 1) {
            const previousSetStart = Math.max(1, pageNos[0] - 4);
            loadPageSet(previousSetStart, previousSetStart + 3);
        }
    };

    const decreaseZoom = () => setZoom((value) => Math.max(60, value - 10));
    const increaseZoom = () => setZoom((value) => Math.min(180, value + 10));
    const resetZoom = () => setZoom(100);

    return (
        <div
            ref={readerRootRef}
            className="bg-gray-100 min-h-[calc(100vh-80px)] select-none"
            onContextMenu={(event) => event.preventDefault()}
        >
            <div className="px-4 md:px-8 lg:px-12 py-6">
                <p>
                    <Link to={"/"}>Home</Link> /
                    <Link to={"/books"}> Books</Link> /
                    <Link to={`/books/${book?.cat_name?.catName}/${book.category}`}> {book?.cat_name?.catName}</Link> /
                    <span className="text-primary"> {book.name}</span>
                </p>

                <div className="sticky top-0 z-20 mt-4 flex flex-col gap-3 border border-gray-200 bg-white px-4 py-3 shadow-sm md:flex-row md:items-center md:justify-between">
                    <div className="min-w-0">
                        <h1 className="truncate text-xl font-semibold text-gray-900 md:text-2xl">{book.name || "Book Reader"}</h1>
                        <p className="text-sm text-gray-500">
                            Page {readerPages.length ? currentPage : 0}{totalPages ? ` of ${totalPages}` : ""}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage <= 1}
                            className="h-10 px-3 border border-gray-300 bg-white text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-50"
                        >
                            Prev
                        </button>
                        <button
                            onClick={goToNextPage}
                            disabled={isLoadingPages || (totalPages ? currentPage >= totalPages : !hasMorePages && currentPage >= (readerPages.at(-1)?.pageNumber || 1))}
                            className="h-10 px-3 border border-gray-300 bg-white text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-50"
                        >
                            Next
                        </button>
                        <div className="mx-1 h-8 w-px bg-gray-200"></div>
                        <button
                            onClick={decreaseZoom}
                            className="h-10 w-10 border border-gray-300 bg-white text-xl leading-none text-gray-800 hover:bg-gray-50"
                            aria-label="Zoom out"
                        >
                            -
                        </button>
                        <button
                            onClick={resetZoom}
                            className="h-10 min-w-16 border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            {zoom}%
                        </button>
                        <button
                            onClick={increaseZoom}
                            className="h-10 w-10 border border-gray-300 bg-white text-xl leading-none text-gray-800 hover:bg-gray-50"
                            aria-label="Zoom in"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="mt-5 flex gap-4">
                    {readerPages.length > 0 && (
                        <aside
                            onScroll={handleThumbnailScroll}
                            onWheel={handleThumbnailWheel}
                            className="sticky top-28 hidden h-[calc(100vh-8rem)] w-28 shrink-0 overflow-y-auto border border-gray-200 bg-white p-2 lg:block"
                        >
                            <div className="flex flex-col gap-2">
                                {readerPages.map((page, index) => (
                                    <button
                                        key={`${page.pageNumber}-${page.image}`}
                                        onClick={() => scrollToPage(page.pageNumber)}
                                        className={`border bg-white p-1 text-left transition ${currentPage === page.pageNumber ? "border-primary ring-2 ring-primary/20" : "border-gray-200 hover:border-gray-400"}`}
                                    >
                                        <img
                                            src={getPageImageSrc(page.image)}
                                            alt={`Page ${page.pageNumber} thumbnail`}
                                            className="w-full bg-gray-50 pointer-events-none"
                                            draggable="false"
                                        />
                                        <span className="mt-1 block text-center text-xs text-gray-500">{page.pageNumber}</span>
                                    </button>
                                ))}
                                {isLoadingPages && <p className="py-2 text-center text-xs text-gray-500">Loading...</p>}
                            </div>
                        </aside>
                    )}

                    <main
                        ref={viewerRef}
                        onScroll={updateCurrentPageOnScroll}
                        className="h-[calc(100vh-10rem)] flex-1 overflow-auto border border-gray-200 bg-gray-200 px-3 py-6 md:px-8"
                    >
                        {readerPages.length > 0 ? (
                            <div className="mx-auto flex min-w-fit flex-col items-center gap-6">
                                {readerPages.map((page, index) => (
                                    <section
                                        key={`${page.pageNumber}-${page.image}`}
                                        ref={(element) => {
                                            pageRefs.current[index] = element;
                                        }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                                            Page {page.pageNumber}
                                        </div>
                                        <div
                                            className="relative bg-white shadow-md"
                                            style={{ width: `${Math.round(760 * (zoom / 100))}px` }}
                                        >
                                            <img
                                                src={getPageImageSrc(page.image)}
                                                alt={`${book.name || "Book"} page ${page.pageNumber}`}
                                                className="block w-full pointer-events-none"
                                                draggable="false"
                                            />
                                            <div
                                                className="absolute inset-0"
                                                aria-hidden="true"
                                                onContextMenu={(event) => event.preventDefault()}
                                            ></div>
                                        </div>
                                    </section>
                                ))}
                            </div>
                        ) : isLoadingPages ? (
                            <div className="flex h-full items-center justify-center text-center text-gray-500">
                                Loading pages...
                            </div>
                        ) : (
                            <div className="flex h-full items-center justify-center text-center text-gray-500">
                                No pages available for this book.
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );

};


export default BookViewer

import { useState, useEffect } from 'react';
import { libassets } from "../../assets/libraryassets";

import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────────
   Gallery Data
   One image = one tagline
───────────────────────────────────────────────────────────── */

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Library Entry Point',
    image: libassets.gal1,
  },
  {
    id: 2,
    title: 'Library Catalogue',
    image: libassets.gal2,
  },
  {
    id: 3,
    title: 'Circulation Desk ',
    image: libassets.gal3,
  },
  {
    id: 4,
    title: 'Reading Room',
    image: libassets.gal4,
  },
  {
    id: 5,
    title: 'Library Books',
    image: libassets.gal6,
  },
  {
    id: 6,
    title: 'Rare Books',
    image: libassets.gal6,
  },
  {
    id: 7,
    title: 'Library Archives',
    image: libassets.gal7,
  },
  // {
  //   id: 8,
  //   title: 'Library Activities',
  //   image: libassets.gal8,
  // },
  // {
  //   id: 9,
  //   title: 'Manuscripts Collection',
  //   image: libassets.gal9,
  // },
  {
    id: 10,
    title: 'Magazines',
    image: libassets.gal10,
  },
  // {
  //   id: 11,
  //   title: 'Digital Library',
  //   image: libassets.gal11,
  // },
];


/* ─────────────────────────────────────────────────────────────
   Image Modal
   Opens ONLY the clicked image
───────────────────────────────────────────────────────────── */

const ImageModal = ({ item, onClose }) => {

  /* Close with Escape key */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);


  /* Disable page scrolling */
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);


  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/90
        flex
        items-center
        justify-center
        p-4
        md:p-8
      "
      onClick={onClose}
    >

      {/* Close Button */}

      <button
        onClick={onClose}
        className="
          absolute
          top-4
          right-4
          md:top-6
          md:right-6
          z-10
          w-10
          h-10
          rounded-full
          bg-white/10
          hover:bg-[#E2691E]
          text-white
          flex
          items-center
          justify-center
          transition-colors
        "
        aria-label="Close image"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>


      {/* Enlarged Image */}

      <div
        className="
          relative
          max-w-7xl
          max-h-[90vh]
          flex
          flex-col
          items-center
        "
        onClick={(e) => e.stopPropagation()}
      >

        <img
          src={item.image}
          alt={item.title}
          className="
            max-w-full
            max-h-[82vh]
            object-contain
            rounded-lg
            shadow-2xl
          "
          style={{
            animation: 'imageZoom 0.2s ease-out',
          }}
        />


        {/* Image tagline */}

        <p
          className="
            text-white
            text-sm
            md:text-base
            font-medium
            mt-4
            text-center
          "
        >
          {item.title}
        </p>

      </div>

    </div>
  );
};


/* ─────────────────────────────────────────────────────────────
   Gallery Card
───────────────────────────────────────────────────────────── */

const GalleryItem = ({ item, onClick }) => {

  return (
    <article className="group">

      {/* Image */}

      <button
        type="button"
        onClick={onClick}
        className="
          relative
          block
          w-full
          aspect-[4/3]
          overflow-hidden
          rounded-lg
          bg-gray-100
          cursor-zoom-in
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#E2691E]
        "
        aria-label={`Enlarge ${item.title}`}
      >

        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />


        {/* Hover overlay */}

        <span
          className="
            absolute
            inset-0
            bg-black/0
            group-hover:bg-black/20
            transition-all
            duration-300
            flex
            items-center
            justify-center
          "
        >

          {/* Zoom icon */}

          <span
            className="
              w-10
              h-10
              rounded-full
              bg-white/90
              text-gray-800
              flex
              items-center
              justify-center
              opacity-0
              group-hover:opacity-100
              transition-opacity
              shadow-lg
            "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zm3-8H8m3-3v6"
              />
            </svg>
          </span>

        </span>

      </button>


      {/* ONE image = ONE tagline */}

      <h3
        className="
          mt-3
          text-sm
          md:text-[15px]
          font-semibold
          text-gray-800
          group-hover:text-[#E2691E]
          transition-colors
        "
      >
        {item.title}
      </h3>

    </article>
  );
};


/* ─────────────────────────────────────────────────────────────
   Gallery Page
───────────────────────────────────────────────────────────── */

const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily: 'Poppins, sans-serif',
      }}
    >

      {/* ───────────────── Banner ───────────────── */}

      <section
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)',
        }}
      >

        <div
          className="
            absolute
            -right-24
            -top-24
            w-80
            h-80
            rounded-full
            border
            border-white/5
          "
        />

        <div
          className="
            absolute
            -left-20
            -bottom-32
            w-72
            h-72
            rounded-full
            border
            border-[#E2691E]/10
          "
        />


        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-14
            md:py-18
          "
        >
          <nav className="flex items-center gap-2 text-[11px] text-gray-500 mb-4">
            <Link to="/libraryhome" className="hover:text-[#F5A973] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Library</span>
            <span>/</span>
            <span className="text-white">Gallery</span>
          </nav>

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            Library
            <span className="text-[#F5A973]"> Photographs</span>
          </h1>



        </div>

      </section>


      {/* ───────────────── Gallery ───────────────── */}

      <main className="bg-gray-50 py-10 md:py-14">

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >

          {/*

            RESPONSIVE GRID

            Mobile:
            1 image per row

            Tablet:
            3 images per row

            Desktop:
            4 images per row

          */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-x-5
              gap-y-8
            "
          >

            {GALLERY_ITEMS.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={() => setSelectedImage(item)}
              />
            ))}

          </div>

        </div>

      </main>


      {/* ───────────────── Image Modal ───────────────── */}

      {selectedImage && (
        <ImageModal
          item={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}


      {/* ───────────────── Animation ───────────────── */}

      <style>{`
        @keyframes imageZoom {
          from {
            opacity: 0;
            transform: scale(0.94);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

    </div>
  );
};

export default Gallery;
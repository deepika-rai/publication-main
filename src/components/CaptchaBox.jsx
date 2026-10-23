import { useEffect, useRef, useState, useCallback } from 'react';

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no confusing 0/O/1/I

function generateCode(length = 6) {
    let code = '';
    for (let i = 0; i < length; i++) {
        code += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    return code;
}

const CaptchaBox = ({ onCodeChange }) => {
    const canvasRef = useRef(null);
    const [code, setCode] = useState('');

    const draw = useCallback((text) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width, h = canvas.height;

        ctx.clearRect(0, 0, w, h);

        // background
        ctx.fillStyle = '#f3f4f6';
        ctx.fillRect(0, 0, w, h);

        // noise lines
        for (let i = 0; i < 6; i++) {
            ctx.strokeStyle = `rgba(0,0,0,${0.1 + Math.random() * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(Math.random() * w, Math.random() * h);
            ctx.lineTo(Math.random() * w, Math.random() * h);
            ctx.stroke();
        }

        // noise dots
        for (let i = 0; i < 40; i++) {
            ctx.fillStyle = `rgba(0,0,0,${0.1 + Math.random() * 0.3})`;
            ctx.beginPath();
            ctx.arc(Math.random() * w, Math.random() * h, 1, 0, Math.PI * 2);
            ctx.fill();
        }

        // characters, each with random rotation/offset
        const charWidth = w / text.length;
        [...text].forEach((ch, i) => {
            ctx.save();
            const x = charWidth * i + charWidth / 2;
            const y = h / 2 + (Math.random() * 6 - 3);
            ctx.translate(x, y);
            ctx.rotate((Math.random() * 0.5 - 0.25));
            ctx.font = 'bold 26px sans-serif';
            ctx.fillStyle = `hsl(${Math.random() * 360}, 40%, 35%)`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(ch, 0, 0);
            ctx.restore();
        });
    }, []);

    const refresh = useCallback(() => {
        const newCode = generateCode();
        setCode(newCode);
        onCodeChange(newCode);
        draw(newCode);
    }, [draw, onCodeChange]);

    useEffect(() => {
        refresh();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex items-center gap-2">
            <canvas
                ref={canvasRef}
                width={160}
                height={50}
                className="rounded border border-gray-300 select-none"
            />
            <button
                type="button"
                onClick={refresh}
                title="Refresh captcha"
                className="text-sm text-primary hover:underline px-2 py-1"
            >
                ⟳
            </button>
        </div>
    );
};

export default CaptchaBox;
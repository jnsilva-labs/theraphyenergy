import { useEffect, type RefObject } from "react";
export default function useScrollMotion(ref: RefObject<HTMLElement>, key: string) {
    useEffect(() => {
        let cancelled = false;
        let cleanup: (() => void) | undefined;
        if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;
        Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
            if (cancelled || !ref.current)
                return;
            gsap.registerPlugin(ScrollTrigger);
            const media = gsap.matchMedia();
            media.add("(prefers-reduced-motion: no-preference)", () => {
                const context = gsap.context(() => {
                    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(element => {
                        gsap.fromTo(element, { y: 24, opacity: .65 }, { y: 0, opacity: 1, duration: .75, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 93%", once: true }, clearProps: "transform,opacity" });
                    });
                    gsap.to(".studio-orbit", { rotation: 45, ease: "none", scrollTrigger: { trigger: ".studio-hero", start: "top top", end: "bottom top", scrub: 1 } });
                }, ref);
                return () => context.revert();
            });
            cleanup = () => media.revert();
        }).catch(() => { });
        return () => { cancelled = true; cleanup?.(); };
    }, [ref, key]);
}

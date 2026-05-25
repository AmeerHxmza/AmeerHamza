'use client';
import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      ringRef.current?.classList.add(styles.expanded);
    };
    const onMouseLeaveLink = () => {
      ringRef.current?.classList.remove(styles.expanded);
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();

    // Add hover effect to all interactive elements
    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    const observer = new MutationObserver(() => {
      const newLinks = document.querySelectorAll('a, button, [role="button"]');
      newLinks.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
        link.addEventListener('mouseenter', onMouseEnterLink);
        link.addEventListener('mouseleave', onMouseLeaveLink);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}

import { useEffect } from 'react'
import tocbot from 'tocbot'

const Toc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post',
      headingSelector: 'h1, h2, h3',
    })

    return () => tocbot.destroy()
  }, [])

  return (
    <>
      <div className="toc lg:sticky lg:top-20" />
      <style jsx global>{`
        .toc {
          background-color: var(--content-bg-primary);
          border: 1px solid var(--content-border);
          border-radius: 0.25rem;
          padding: 1rem;
          font-size: 0.875rem;
        }

        .toc-list .toc-list {
          padding-left: 1rem;
          padding-top: 0.5rem;
        }

        .toc-list-item {
          padding-bottom: 0.5rem;
        }

        .toc-list-item:last-child {
          padding-bottom: 0;
        }

        .toc-link {
          color: var(--text-secondary);
        }

        .is-active-link {
          color: var(--text-primary);
          font-weight: 700;
        }
      `}</style>
    </>
  )
}

export default Toc
import { useEffect, useState } from 'react'

type MenuProps = {
  isMenuOpen: boolean
  headerRef: React.MutableRefObject<HTMLHeadElement | null>
}

function Menu({
  isMenuOpen,
  headerRef
}: MenuProps) {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }, [headerRef])

  return (
    <aside
      className={`w-96 fixed bg-secondary z-10 overflow-y-auto select-none transition-all duration-300 ease-in-out ${isMenuOpen ? 'left-0' : '-left-96 shadow-xl'}`}
      style={{ height: `calc(100vh - ${headerHeight}px)`, top: `${headerHeight}px` }}
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti doloremque suscipit commodi esse, consequatur illo. Excepturi, aliquid numquam. Placeat dicta nulla voluptas inventore praesentium sit, sed ea maiores, necessitatibus nesciunt sapiente. Vero voluptatum ducimus repellat ea, maiores modi totam eveniet nihil suscipit incidunt dolore harum necessitatibus, debitis pariatur accusantium doloribus deleniti labore rem, nisi voluptas explicabo impedit cum earum voluptatibus. Laboriosam totam, voluptatibus architecto harum non culpa. Quod porro quam, voluptatibus sit explicabo, dolorum eaque amet, doloremque aperiam voluptate exercitationem illum. Aperiam eveniet alias maiores earum, vitae mollitia ad maxime totam laborum sequi ut quas a voluptates beatae fuga ex!
    </aside>
  )
}

export { Menu }
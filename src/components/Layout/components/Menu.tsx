import { PrincipalSection } from '@/components/Layout/components/LoggedSection'
// import { GuestSection } from '@/components/Layout/components/GuestSection'

type MenuProps = {
  isMenuOpen: boolean
  headerHeight: number
}

function Menu({
  isMenuOpen,
  headerHeight
}: MenuProps) {
  

  return (
    <aside
      className={`w-96 fixed bg-secondary text-secondary z-10 overflow-y-auto select-none flex flex-col justify-between p-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'left-0' : '-left-96 shadow-xl'}`}
      style={{ height: `calc(100vh - ${headerHeight}px)`, top: `${headerHeight}px` }}
    >
      <PrincipalSection />
      {/* <GuestSection /> */}
      
      <div className='flex justify-center items-center'>
        <span className='bg text-black rounded p-2 m-1'>THEME</span>
        <span className='bg text-black rounded p-2 m-1'>LANGUAGE</span>
      </div>
    </aside>
  )
}

export { Menu }
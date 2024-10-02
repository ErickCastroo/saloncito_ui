import GobiernoSonora from '@/assets/images/Gobierno_de_Sonora.jpg'
function BrandContainer() {
  return (
    <div className='bg-tertiary hidden w-1/2 h-5/6 md:flex items-center justify-center rounded-tr rounded-br'>
      <img className='w-[600px] h-[600px] object-contain' src={GobiernoSonora} alt='Logo of Saloncito' />
    </div>
  )
}

export { BrandContainer }
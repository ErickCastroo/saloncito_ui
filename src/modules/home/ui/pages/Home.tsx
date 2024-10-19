import { Card } from '@/components/Card'

function Home() {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-4 bg-gray-100'>
      <Card
        id='Clase1'
        title='Curso de Matemáticas'
        subtitle='Profesor: Juan Pérez'
        description='Un curso sobre álgebra y geometría.'
        imageUrl='https://via.placeholder.com/300x200'
        onClick={() => console.log('Clase Seleccionada')}
      />
      <Card
        id='Clase1'
        title='Curso de Matemáticas'
        subtitle='Profesor: Juan Pérez'
        description='Un curso sobre álgebra y geometría.'
        imageUrl='https://via.placeholder.com/300x200'
        onClick={() => console.log('Clase Seleccionada')}
      />
      <Card
        id='Clase1'
        title='Curso de Matemáticas'
        subtitle='Profesor: Juan Pérez'
        description='Un curso sobre álgebra y geometría.'
        imageUrl='https://via.placeholder.com/300x200'
        onClick={() => console.log('Clase Seleccionada')}
      />
      <Card
        id='Clase1'
        title='Curso de Matemáticas'
        subtitle='Profesor: Juan Pérez'
        description='Un curso sobre álgebra y geometría.'
        imageUrl='https://via.placeholder.com/300x200'
        onClick={() => console.log('Clase Seleccionada')}
      />
      <Card
        id='Clase1'
        title='Curso de Matemáticas'
        subtitle='Profesor: Juan Pérez'
        description='Un curso sobre álgebra y geometría.'
        imageUrl='https://via.placeholder.com/300x200'
        onClick={() => console.log('Clase Seleccionada')}
      />
      <Card
        id='Clase1'
        title='Curso de Matemáticas'
        subtitle='Profesor: Juan Pérez'
        description='Un curso sobre álgebra y geometría.'
        imageUrl='https://via.placeholder.com/300x200'
        onClick={() => console.log('Clase Seleccionada')}
      />
      <Card
        id='Clase1'
        title='Curso de Matemáticas'
        subtitle='Profesor: Juan Pérez'
        description='Un curso sobre álgebra y geometría.'
        imageUrl='https://via.placeholder.com/300x200'
        onClick={() => console.log('Clase Seleccionada')}
      />

    </div>
  )
}

export { Home }
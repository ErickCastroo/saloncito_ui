import { Component, ReactNode } from 'react'
import ReactDOM from 'react-dom'

const portalRoot = document.getElementById('portal')

interface PortalProps {
  children: ReactNode;
}

export default class Portal extends Component<PortalProps> {
  private el: HTMLDivElement

  constructor(props: PortalProps) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    if (portalRoot) {
      portalRoot.appendChild(this.el)
    } else {
      console.error('No se encontró un elemento con id "portal" en el DOM.')
    }
  }

  componentWillUnmount() {
    if (portalRoot) {
      portalRoot.removeChild(this.el)
    }
  }

  render() {
    const { children } = this.props
    return ReactDOM.createPortal(children, this.el)
  }
}

import React from 'react'
import { Container, Logo, SearchInput } from './styled'

const Header = (props) => {

  const [inputActive, setInputActive] = React.useState(false)
  const handleInputFocus = () => {
    setInputActive(true)
  }
  const handleInputBlur = () => {
    setInputActive(false)
  }
  const handleChange = (e) => {
      props.onSearch(e.target.value);
    }
  return (
    <Container>
        <Logo src="/assets/logo.png" />
        <SearchInput type="text" placeholder="Digite um produto..."
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={props.search}
        onChange={handleChange}
        active={inputActive}
        />
    </Container>
  )
}
export default Header
import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string | JSX.Element
  marginBottom?: string
}

const Tag = ({ children, size = 'small', marginBottom }: Props) => (
  <TagContainer size={size} marginBottom={marginBottom}>
    {children}
  </TagContainer>
)

export default Tag

import { TagContainer } from "./styles"

export type Props = {
    size: 'small' | 'big';
    children: string | string[];

}

const Tag = ({ children, size }: Props) => (
    <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
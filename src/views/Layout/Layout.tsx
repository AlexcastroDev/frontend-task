import { FunctionComponent } from "react"
import { StyledContainer, StyledInput, StyledSearchContainer } from "./Layout.styles"
import SearchIcon from "../../assets/icons/search.svg";
import IconButton from '@mui/material/IconButton';
import { useAppContext } from "../../contexts/AppProvider";

export const Layout: FunctionComponent = ({ children }) => {
    const { searchBox, movies: { fetchMovies } } = useAppContext()

    const handleKeyEnterDown = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') {
          fetchMovies()
        }
    }

    return (
        <StyledContainer>
            <StyledSearchContainer>
                <StyledInput aria-label="search" onKeyDown={handleKeyEnterDown} value={searchBox.search} onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => searchBox.setSearch(e.target.value)
                }></StyledInput>
                <IconButton onClick={fetchMovies}><SearchIcon /></IconButton>
            </StyledSearchContainer>
            { children }
        </StyledContainer>
    )
}
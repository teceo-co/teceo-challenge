import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { useRef, type KeyboardEvent } from 'react';
import { useApplicationContext } from '../contexts/ApplicationContext';
import { LoadingStatus } from '../enums/LoadingStatus.enum';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#eee',
  color: '#757575',
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 8,
  border: 'none',
  padding: '0px 8px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: '8px',
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: 300,
      '&:focus': {
        width: 500,
      },
    },
  },
}));

const GlobalSearch = () => {
  const { onChangeSearch, loadingStatus } = useApplicationContext();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    inputRef.current?.select();
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const value = inputRef.current?.value ?? '';
      onChangeSearch(value);
      handleFocus();
    }
  };

  return (
    <Search>
      <StyledInputBase
        inputRef={inputRef}
        onKeyDown={handleKeyPress}
        onFocus={handleFocus}
        placeholder="buscar"
        inputProps={{ 'aria-label': 'search' }}
      />
      {loadingStatus === LoadingStatus.LOADING ? (
        <CircularProgress size="24px" color="inherit" />
      ) : (
        <SearchIcon onClick={handleIconClick} />
      )}
    </Search>
  );
};

export default GlobalSearch;

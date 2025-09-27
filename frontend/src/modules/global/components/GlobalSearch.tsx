import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { useRef, useState, type KeyboardEvent } from 'react';

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
  const [value, setValue] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed! Value:', value);
      // Perform desired action, e.g., submit form, search, etc.
      // Prevent default form submission if the TextField is inside a <form>
      event.preventDefault();
    }
  };

  return (
    <Search>
      <StyledInputBase
        inputRef={inputRef}
        onChange={e => setValue(e.target.value)}
        value={value}
        onKeyDown={handleKeyPress}
        placeholder="buscar"
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIcon onClick={handleIconClick} />
    </Search>
  );
};

export default GlobalSearch;

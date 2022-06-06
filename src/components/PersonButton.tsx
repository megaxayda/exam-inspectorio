import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type PersonButtonProps = {
  name: string;
};

export default function PersonButton({ name }: PersonButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('person/' + name);
  };

  return (
    <Button variant="contained" onClick={handleClick} color="secondary">
      {name}
    </Button>
  );
}

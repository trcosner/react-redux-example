import React from 'react';
import { Input } from 'rebass';

const TextField = (field) => {
  return(
    <Input
      placeholder={field.placeholder}
      {...field.input}
    />
  )
}

export default TextField;

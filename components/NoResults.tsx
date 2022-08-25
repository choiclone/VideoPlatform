import React from 'react';
import { NextPage } from 'next';

interface Props {
    text: string;
}

const NoResults = ({text}: Props) => {
  return (
    <div>NoResults</div>
  )
}

export default NoResults
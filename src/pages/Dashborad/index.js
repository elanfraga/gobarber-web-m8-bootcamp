import React from 'react';

import api from '~/services/api';

// import { Container } from './styles';

export default function Dashborad() {
  api.get('appointments');

  return <h1>dashboard</h1>;
}

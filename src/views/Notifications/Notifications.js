/*eslint-disable*/
import React, { useState, useEffect, useContext } from "react";

import AppContext from '../../Context/hooks/AppContext';
import api from '../../services/api';

import * as S from './styles';


export default function Notifications() {
  const [notification, setNotification] = useState([]);
  const [error, setError] = useState(null);
  const { token } = useContext(AppContext);


  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api.get('/notification')
      .then(resp => {
        const notifications = resp.data.value;
        setNotification(notifications);
      })
      .catch((err) => {
        setError(err);
      })
  }, []);

  const message = notification

  const messa = Array(10).fill(
    { title: 'alerta urgente', messa: 'ação necessária' }
  )

  // console.log(messa.map(item => item.title))
  console.log(notification)


  return (
    <S.Container>
      {notification.map((item, index) => {
        return (
          <S.Notification key={String(item.notificationHistoricalGuid)}>
            <S.Title>{item.title}</S.Title>
            <S.Message>{item.text}</S.Message>
          </S.Notification>
        )
      })}
    </S.Container>
  );
}

import React from "@pika/react";
import {useEffect, useState} from "@pika/react";
import {useLocation, useParams, useHistory} from 'react-router-dom'
import {useTranslation} from "react-i18next";

const Home: React.FC = () => {
  let {t} = useTranslation()
  let [count, setCount] = useState(0)
  let [query, setQuery] = useState(null)
  let location = useLocation();
  let history = useHistory();
  let params = useParams();

  useEffect(() => {
    document.title = `当前count=${count}`
    if (count > 5) {
      history.push({pathname: '/about'})
    }
  }, [count])

  useEffect(() => {
    console.log("params=", params)
  }, [params])


  useEffect(() => {
    console.log("query=", query)
  }, [query])

  useEffect(() => {
    setQuery(new URLSearchParams(location.search))
  }, [location])

  return (
    <>
      <h1>{t('hello')}</h1>
      <h1>{t('Home Pages')}</h1>
      <button onClick={() => setCount(count => count + 1)}>count is: {count}</button>
    </>
  )
}

export default Home

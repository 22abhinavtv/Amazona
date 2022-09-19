import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../Components/Layout/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Grid>
        <Layout/>
    </Grid>
  )
}

export default Home

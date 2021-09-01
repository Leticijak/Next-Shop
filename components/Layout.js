import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import Footer from './Footer'
import useStyles from '../utils/styles'

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <Footer />
    </div>
  )
}

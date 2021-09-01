import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from '@material-ui/core'

import Layout from '../components/Layout'
import data from '../utils/data'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((p) => (
            <Grid item md={4} key={p.name}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={p.image}
                    title={p.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{p.name}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>${p.price}</Typography>
                  <Button size="small" variant="outlined" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

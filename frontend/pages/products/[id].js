import List from '@mui/material/List';
import PageContent from '../../components/pagetemplate/PageContent';
import PageHeader from '../../components/pagetemplate/PageHeader';

import { ControllerTextField } from '../../components/ControllerTextField';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const pageLabel = 'Edit Product';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async () => {
    const name = watch('name');
    const price = watch('price');
    const category = watch('category');
    const count = watch('count');
    const rating = watch('rating');
    const body = { name, price, category, count, rating };
    console.log(body);
    try {
      if (id === '-1') {
        alert('insert new product!');
      } else {
        alert('update existing product!');
      }
      router.back();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <List>
      <PageHeader pageLabel={pageLabel} />
      <PageContent>
        <ListItem>
          <Grid item md={12} xs={12}>
            <Card>
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <List>
                  <ListItem>
                    <ControllerTextField
                      name="name"
                      label="Name"
                      control={control}
                      errors={errors.name}
                      rules={{ required: true }}
                    />
                  </ListItem>
                  <ListItem>
                    <ControllerTextField
                      name="price"
                      label="Price"
                      control={control}
                      errors={errors.price}
                      rules={{ required: true }}
                    />
                  </ListItem>
                  <ListItem>
                    <ControllerTextField
                      name="category"
                      label="Category"
                      control={control}
                      errors={errors.category}
                      rules={{ required: true }}
                    />
                  </ListItem>
                  <ListItem>
                    <ControllerTextField
                      name="count"
                      label="Count"
                      control={control}
                      errors={errors.count}
                      rules={{ required: true }}
                    />
                  </ListItem>
                  <ListItem>
                    <ControllerTextField
                      name="rating"
                      label="Rating"
                      control={control}
                      errors={errors.rating}
                      rules={{ required: true }}
                    />
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      color="primary"
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      color="primary"
                      href="/products/"
                    >
                      Cancel
                    </Button>
                  </ListItem>
                </List>
              </form>
            </Card>
          </Grid>
        </ListItem>
      </PageContent>
    </List>
  );
}

import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
  query {
    characters {
      results{
        id
        image
        name
      }
    }
  }
`
export const useDogs = () => {
    const { loading, data, error } = useQuery(GET_DOGS);

    return {
        data,
        loading,
        error
    }
}

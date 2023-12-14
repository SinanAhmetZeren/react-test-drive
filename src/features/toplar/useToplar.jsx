export function useToplar() {
  async function fetchTop(number) {
    const res = await fetch(`https://dummyjson.com/products/${number}`).then(
      (r) => r.json()
    );
    console.log(res.images[0]);

    return res.images[0];
  }

  return { fetchTop };
}

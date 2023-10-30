export async function getStaticProps() {
    const res = await fetch('https://.../getDataIsrWay')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }
  
  function getDataIsrWay({ posts }) {
    // Render posts...
  }
  
  export default getDataIsrWay
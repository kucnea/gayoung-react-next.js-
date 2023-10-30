function getDataSsrWay({ data }) {
    // Render data...
  }
  
  // This gets called on every request
  export async function getServerSideProps(context) {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=60'
      );
    
    // s-maxage=10 : CDN(또는 다른 캐싱 프록시)에서 10초 동안 응답을 캐싱
    // revalidate=60 : 캐시가 만료된 후에도 60초 동안 캐시를 사용하면서 백그라운드에서 새 데이터
    // public / private: 응답이 public cache (CDN 같은 중간 서버)에 캐싱될 수 있는지, 
    //                   아니면 오직 사용자의 브라우저와 같은 private cache에만 캐싱될 수 있는지를 지정
    // max-age=<seconds>: 캐시가 신선하다고 간주되는 최대 기간을 초 단위로 지정
    // s-maxage=<seconds>: max-age와 유사하지만, 이 지시문은 public cache에만 적용
    // no-cache: 캐시된 응답을 재사용하기 전에 원본 서버에게 이를 검증해야 함
    // no-store: 응답을 어떤 형태로든 캐시해서는 안됨

    // getServerSideProps 내부에서 오류가 발생하면 pages/500.js 파일이 표시된다. 
    // 개발 중에는 이 파일이 사용되지 않고 dev overlay가 대신 표시



    // Fetch data and return as props...
  

    // Pass data to the page via props
    return { props: { data } }
  }
  
  export default getDataSsrWay
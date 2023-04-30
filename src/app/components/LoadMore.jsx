import React from 'react'

export default function LoadMore({value , page , lastStarShips , setValue,setPage}) {
    //kullanıcı load more buttonuna bastığında bir sonraki sayfaya istek atılmasını sağlayacak olan fonksiyon
  const handleLoadMore = () => {
    if (value == null) {
      setValue('');

    }
    setPage(page + 1);
  };
  return (
    <div className='center'>
    {// apidan veriler 10ar itemlik arrayler halinde döndüğü için eğer dönen array 10dan az iteme sahip olursa
      //load more buttonunu etkisiz kılan yapı .
      lastStarShips.length >= 10 && (
        <button className='button-lm' onClick={handleLoadMore}>Load More</button>
      )}
  </div>
  )
}

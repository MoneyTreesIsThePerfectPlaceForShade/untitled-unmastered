import error from '@/shared/assets/error.jpeg';

function Error() {
  return (
    <div>
      <h1>Увы и ах</h1>
      <img src={error} alt="image of error" width={450} />
    </div>
  );
}

export default Error;

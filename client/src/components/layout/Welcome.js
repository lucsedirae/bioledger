export default function Welcome() {
  //* Placeholder for context state
  const user = 'Batman';

  return <>{user ? <div className='welcome'>Welcome {user}...</div> : ''}</>;
}

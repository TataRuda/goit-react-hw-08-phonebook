const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}

export default function HomePage () {
    return (
      <main style={styles.container} >
        <h1 >
          Phonebook welcome page
        </h1>
      </main>
    );
}


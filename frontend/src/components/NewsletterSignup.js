import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
  const fetcher = useFetcher()

  const { data, state, } = fetcher

  // console.log(data, 'data')


  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert('signup success')
      // console.log('eeee')
    }
  }, [data, state])

  return (
    <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
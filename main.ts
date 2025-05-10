type results = {
  hello: string;
}

export default function main () : results {
  return { hello: 'world' }
}

// run main if this file is called directly
if (import.meta.url.endsWith(process.argv[1] || '')) main()
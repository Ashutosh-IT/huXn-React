import React from 'react'
import FetchOld from './components/FetchOld'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import FetchRQ from './components/FetchRQ';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        React Query Tutorial
        <div>
          {/* <FetchOld/> */}
          <FetchRQ/>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
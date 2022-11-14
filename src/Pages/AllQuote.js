import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
const AllQuote = () => {
  const {
    sendRequest,
    error,
    status,
    data: loadedQuotes,
  } = useHttp(getAllQuotes, true);
    //set true in second arugument that controls that we start in loading state and that therefore a state is pending

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if(error){
    return <p className="centered focused">{error}</p>
  }
  if(status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)){
return <NoQuotesFound/>
  }
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuote;

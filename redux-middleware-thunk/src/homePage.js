import React, { Component } from 'react';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from './actions'

export function homePage() {
  useEffect(()=>{
    mapDispatchprops.onFetchData()
    }, []);
  return (
      <div className="">
        <h1>Fetching the data from the backend</h1>
        {this.props.error && <p>{this.props.error}</p>}

        {this.props.data && <ul>
          <li>id: {this.props.data.id}</li>
          <li>title: {this.props.data.title}</li>
        </ul>}
      </div>
  )
}

const mapStatetoProps = (state) => {
  return { num: state.num, data: state.data, error: state.error }
}
const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) }
}


export default connect(mapStatetoProps, mapDispatchprops)(homePage);
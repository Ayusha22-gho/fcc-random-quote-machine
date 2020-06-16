import React , {Component} from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import QuoteMachine from './components/QuoteMachine';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  container : {
    display : 'flex',//to vertically center the machine
    height : '100vh',
    alignItems :'center'

  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      selectedQuotesIndex : null,
    }
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({quotes}, this.assignNewQuoteIndex));
  }
  // handleNextQuote() {
  //   console.log("working");
  // }
  get selectedQuote() {
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuotesIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuotesIndex];
  }
  //returns an integer representating an index in state.quotes
  //if state.quotes is empty, returns undefined
  generateNewQuoteIndex() {
      if(!this.state.quotes.length) {
        return undefined;
      }
      return random(0 , this.state.quotes.length-1)
  }  

  assignNewQuoteIndex() {
    this.setState(
      {
        selectedQuotesIndex : this.generateNewQuoteIndex()
      }
    );
  }

  render() {
    // console.log(this.state.quotes);
    // console.log(this.state.selectedQuotesIndex);
    return (
     
      <Grid className ={this.props.classes.container} id = "quote-box"  justify = "center"  container>
        <Grid xs = {11} lg = {8} item >
        { 
          this.selectedQuote ? 
          <QuoteMachine selectedQuote = {this.selectedQuote}  assignNewQuoteIndex = {this.assignNewQuoteIndex}/>
          : null 
        }
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);

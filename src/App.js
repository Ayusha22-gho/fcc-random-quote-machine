import React , {Component} from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import QuoteMachine from './components/QuoteMachine';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  container : {
    display : 'flex',
    height : '100vh',
    alignItems :'center',
    backgroundColor : 'pink'
    

  },
  

}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      currentColor: 0,
      selectedQuotesIndex : null,
      
      
    }
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    // this.changeColor = this.changeColor.bind(this);
   
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({quotes}, this.assignNewQuoteIndex));
  }
  
  get selectedQuote() {
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuotesIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuotesIndex];
  }
  
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

      randomColor() {
        const color = `rgb(
          ${Math.floor(Math.random() * 155)},
          ${Math.floor(Math.random() * 155)},
          ${Math.floor(Math.random() * 155)})`;
        return color;
      }

  
  
  render() {
    return (
       
       
        <Grid className ={this.props.classes.container} id = "quote-box"  justify = "center"  container
         >
      
        <Grid xs = {11} lg = {8} item >
        { 
          this.selectedQuote ? 
          <QuoteMachine selectedQuote = {this.selectedQuote}  assignNewQuoteIndex = {this.assignNewQuoteIndex} displayColor={this.randomColor} />
          : null 
        }
        </Grid>
      </Grid>   
    );
   }
 }
export default withStyles(styles)(App);

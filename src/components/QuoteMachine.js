import React from 'react';
import {Card , CardActions, CardContent , Button}from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';




class QuoteMachine extends React.Component {

    render() {
        const randomColor = this.props.displayColor();
        const html = document.documentElement;
        html.style.backgroundColor = randomColor;

        return (
        <div style={{backgroundColor: randomColor}}>
         <Card >
        <CardContent style={{ color: randomColor }}>
             <Typography id = "text">
                {this.props.selectedQuote.quote} 
             </Typography>
             <Typography className= "d-block text-right">
              - <span id = "author">{this.props.selectedQuote.author}</span>
             </Typography>
            
    
        </CardContent>
        <CardActions>
            <IconButton
                id = "tweet-quote"
                target = "_blank"
                href ={encodeURI(`https://twitter.com/intent/tweet?text=${this.props.selectedQuote.quote}  -${this.props.selectedQuote.author}&hashtags=myQuotesMachine`)}
            >
                <FontAwesomeIcon icon ={faTwitter} size = "xs" ></FontAwesomeIcon>
            </IconButton>
            <IconButton
                target = "_blank"
                href = {`https://www.instagram.com/accounts/onetap/?next=%2F${this.props.selectedQuote.quote}`}
               > <FontAwesomeIcon icon = {faInstagram} size = "xs"></FontAwesomeIcon>
            </IconButton>
            <Button id = "new-quote" size ="small"
                className= "d-block text-right"
                style={{ backgroundColor: randomColor, color : "white"}}
                onClick={this.props.assignNewQuoteIndex}
             >Next Quote</Button>
        </CardActions>
        
        
    </Card>
    </div>

        );
    }
}


export default QuoteMachine;
{/* `"${props.selectedQuote.quote}" - ${props.selectedQuote.author}` : ""} */}
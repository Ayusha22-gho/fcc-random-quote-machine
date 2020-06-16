import React from 'react';
import {Card , CardActions, CardContent , Button}from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fsTwitter } from '@fortawesome/free-brands-svg-icons';


const QuoteMachine = ({assignNewQuoteIndex, selectedQuote}) => {//destructoring (props)
    return (
    <Card>
        <CardContent>
             <Typography id = "text">
                {selectedQuote.quote} - <span id = "author">{selectedQuote.author}</span>
            </Typography>
    
        </CardContent>
        <CardActions>
            <Button id = "new-quote" size ="small" onClick = {assignNewQuoteIndex}>Next Quote</Button>
            <IconButton
                id = "tweet"
                target = "_blank"
                href ={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=myQuotesMachine`)}
            >
                <FontAwesomeIcon icon ={fsTwitter} size = "xs" ></FontAwesomeIcon>
            </IconButton>
        </CardActions>
        
        
    </Card>
    )
}
export default QuoteMachine;
{/* `"${props.selectedQuote.quote}" - ${props.selectedQuote.author}` : ""} */}
import React, { Component } from 'react';

import { Grid } from '@material-ui/core';
import { GridItem } from '@material-ui/core';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'





function chunkArray(arr,n){
    var chunkLength = Math.max(arr.length/n ,1);
    var chunks = [];
    for (var i = 0; i < n; i++) {
        if(chunkLength*(i+1)<=arr.length)chunks.push(arr.slice(chunkLength*i, chunkLength*(i+1)));
    }
    return chunks; 
}

function shuffle(array) {
    return (array.sort(() => Math.random() - .5));
}

function combine(list1,list2) {
    var result = {};
    list1.forEach((key,i) => result[key] = list2[i])
    return [Object.keys(result), Object.values(result)]
}

class ListContainer extends Component {
    render () {
        const studentList = [
            'Samuel', 'Josh Yuan',
            'Alvina', 'Katherine', 'Ethan Cheng', 'Janet', 
            'Brianna', 'Kelly', 'James', 'Anson', 'Josh Park', 
            'Karina', 'Sean', 'Zoe', 'Ryan', 'Kaylee', 
            'Thomas', 'Evelyn'
            ];
        
        var students = chunkArray(shuffle(studentList),2);
        var dictOfStudents = combine(students[0],students[1]);
        return (
            <Grid container alignItems = "center" justify="center">
                <Grid item xs={6}>
                    <Table>
                            <TableRow>
                                <TableCell>
                                {dictOfStudents[0].map(row =>(
                                <TableRow key={row}>
                                    <TableCell>{row}</TableCell>                
                                </TableRow>
                                ))}
                            </TableCell>
                            <TableCell>
                                {dictOfStudents[1].map(row =>(
                                <TableRow key={row}>
                                    <TableCell>{row}</TableCell>                
                                </TableRow>
                            ))}
                            </TableCell>
                            </TableRow>
                    </Table>
                </Grid>
            </Grid>
        )
    }
}


export default ListContainer;
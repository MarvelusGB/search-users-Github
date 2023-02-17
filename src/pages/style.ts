import styled from "styled-components";



export const HomeComponent = styled.div`

    display: flex;
    justify-content: flex-end;

    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        width: 30%;
        height: 100%;
        left: 0;
        position: fixed;
        background-color: gainsboro;
        input{
            padding: 8px;
            border-radius: 6px;
            border-width: 0;
            :hover,:focus, :focus-visible{
                border-width: 0.1px;
                outline: none;
            }
        }
    }
    .list{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
        gap: 20px;
        width: 70%;
        height: 100%;
        flex-wrap: wrap;
        background: #F0F0F0;
        .box-list{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }
    }

    .card{
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .card-box{
            background-color: white;
            border-radius: 5px;
            padding: 10px;
            box-shadow: 0 0 2px 2px rgb(0 0 0 / 5%);
            img{
                width: 100%;
                border-radius: 5px;
                padding-bottom: 20px;
            }
            .description-box{
                text-align: center;
                strong{
                    font: 2.8rem/3.4rem;
                    padding: 0;
                    margin: 0 0 10px;
                    letter-spacing: -.075rem;
                }
                p{
                    word-break: break-all;
                    padding-top: 10px;
                }
            }
        }
        
        
    }
`;


export const Card = styled.div`
    position: relative;

    &:hover{
        .card-box{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            filter: blur( 3px);
            img{
                transform: scale(0.98);
            }
        }
        .card-hover{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
        }
    }
    
    .card-box{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .card-hover{
        transition: all 0.3s ease-in-out;
        display: none;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        color: white;
        background-color: #4241407a;
        padding: 0px 25px;
        text-align: center;

        label{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            text-transform: uppercase;

            input{
                width: 25px;
                height: 14px
            }
        }

        button{
            padding: 10px 15px;
            border-radius: 5px;
            border: 1px solid white;
            font-size: 12px;
            text-transform: uppercase;
            font-weight: bold;
            background: #b61f1f;
            color: white;
        }
    }
`;
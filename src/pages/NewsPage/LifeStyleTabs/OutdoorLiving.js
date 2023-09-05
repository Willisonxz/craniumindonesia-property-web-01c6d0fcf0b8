import { Autocomplete, Box, Breadcrumbs, Button, ButtonBase, Card, CardActions, CardContent, CardMedia, Grid, Pagination, PaginationItem, Paper, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import NavbarHomepage from "../../../components/NavbarHomepage";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import MainTabs from "../components/MainTabs";
import img from '../../NewsPage/assets/image_2.png'
import SubTabsLifeStyle from "../components/SubTabsLifeStyle";
import CardAds from "../components/CardAds";
import QuickSearch from "../../../components/QuickSearch";
import Footer from "../../../components/Footer";
import HeaderNews from "../components/HeaderNews";
import Search from "../components/Search";
import { config } from "../../../services/config";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import RoutesPage from '../../../Routes';
import { useNavigate } from 'react-router-dom';
import BannerAds from "../components/BannerAds";

const dummyData = [
    { id: 1, title: 'Editor’s Picks 1', location: 'melburne 1', newsTitle: 'Victoria ‘the worst stateto be a landlord 1', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60' },
    { id: 2, title: 'Editor’s Picks 2', location: 'melburne 2', newsTitle: 'Victoria ‘the worst stateto be a landlord 2', image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { id: 3, title: 'Editor’s Picks 3', location: 'melburne 3', newsTitle: 'Victoria ‘the worst stateto be a landlord 3', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 4, title: 'Editor’s Picks 4', location: 'melburne 4', newsTitle: 'Victoria ‘the worst stateto be a landlord 4', image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { id: 5, title: 'Editor’s Picks 5', location: 'melburne 5', newsTitle: 'Victoria ‘the worst stateto be a landlord 5', image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { id: 6, title: 'Editor’s Picks 6', location: 'melburne 6', newsTitle: 'Victoria ‘the worst stateto be a landlord 6', image: 'https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    // Add more data here
];

const img1 = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9Ijk1cHgiIGhlaWdodD0iOTVweCIgdmlld0JveD0iMCAwIDk1IDk1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MCAoNTQ5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iTElGRVNUWUxFLUNhbGMtKERlc2t0b3ArTW9iaWxlKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ik1vYmlsZS1MaWdodGJveCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMy4wMDAwMDAsIC0yNTkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzQuMDAwMDAwLCAyNjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBzdHJva2U9IiNlNDAwMmIiIHN0cm9rZS13aWR0aD0iMC44IiBmaWxsPSIjRkZGRkZGIiBjeD0iNDYuNSIgY3k9IjQ2LjUiIHI9IjQ2LjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPGcgaWQ9IklDT04ta2l0Y2hlbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguODYyMDY5LCAyMC44NDQ4MjgpIiBmaWxsPSIjZTQwMDJiIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi4wNDE3MTgzOSwxMy42MTUzMjkzIEw5LjEyNTMxMzczLDEzLjYxNTMyOTMgTDkuMTI1MzEzNzMsNy40NTI5MTM2MSBMNi4wNDE3MTgzOSw3LjQ1MjkxMzYxIEw2LjA0MTcxODM5LDEzLjYxNTMyOTMgWiBNMzMuNjcyNDEzOCwxNy45OTE5MzkxIEwzMy42NzI0MTM4LDQuMTIyNTgwNTcgQzMzLjY3MjQxMzgsMS44NDk0MzU3OSAzMS44MTg1OTQ0LDAgMjkuNTM5OTM4OSwwIEw0LjEzMjM1MjAyLDAgQzEuODUzODE5MzcsMCAwLDEuODQ5NDM1NzkgMCw0LjEyMjU4MDU3IEwwLDE3Ljk5MTkzOTEgTDMzLjY3MjQxMzgsMTcuOTkxOTM5MSBaIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYuMDQxNzE4MzksMzEuMjk2NjczMSBMOS4xMjUzMTM3MywzMS4yOTY2NzMxIEw5LjEyNTMxMzczLDI1LjE4Mzc4NjUgTDYuMDQxNzE4MzksMjUuMTgzNzg2NSBMNi4wNDE3MTgzOSwzMS4yOTY2NzMxIFogTTAsMTkuOTkxMDQzNCBMMCw0Ny4yMjA3NzY5IEMwLDQ5LjQ3NTc3MzUgMS44NTM4MTkzNyw1MS4zMTAzNDQ4IDQuMTMyMzUyMDIsNTEuMzEwMzQ0OCBMMjkuNTM5OTM4OSw1MS4zMTAzNDQ4IEMzMS44MTg1OTQ0LDUxLjMxMDM0NDggMzMuNjcyNDEzOCw0OS40NzU3NzM1IDMzLjY3MjQxMzgsNDcuMjIwNzc2OSBMMzMuNjcyNDEzOCwxOS45OTEwNDM0IEwwLDE5Ljk5MTA0MzQgWiIgaWQ9IkZpbGwtMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
const img2 = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9Ijk1cHgiIGhlaWdodD0iOTVweCIgdmlld0JveD0iMCAwIDk1IDk1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MCAoNTQ5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iTElGRVNUWUxFLUNhbGMtKERlc2t0b3ArTW9iaWxlKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ik1vYmlsZS1MaWdodGJveCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4LjAwMDAwMCwgLTI1OS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU5LjAwMDAwMCwgMjYwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgc3Ryb2tlPSIjNjk3Njg0IiBzdHJva2Utd2lkdGg9IjAuOCIgZmlsbD0iI0ZGRkZGRiIgY3g9IjQ2LjUiIGN5PSI0Ni41IiByPSI0Ni41Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDxnIGlkPSJJQ09OLWJhdGhyb29tIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi40NTY4OTcsIDE2LjAzNDQ4MykiIGZpbGw9IiM2ODc2ODQiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC4zMDMyMTAyLDEyLjczNTU3OTEgQzE4LjA1MzE4MjksMTMuODU0ODE2OCAxMy4zMjI0MDM3LDE4LjIxODk1OTggMTMuMDIxMDM0MywyMy41MTkwODEgQzEzLjAxNDI1NzEsMjMuNjU4OTg1NyAxMy4wNjMyODM3LDIzLjc5NjAzODEgMTMuMTYwNzYwMSwyMy44OTgwMDc0IEMxMy4yNTgwOTI0LDIzLjk5OTQwNjIgMTMuMzkzOTI0OSwyNC4wNTczMDc3IDEzLjUzNTIzNjksMjQuMDU3MzA3NyBMNDEuMzcwMDkzMSwyNC4wNTczMDc3IEM0MS41MTE1NDkzLDI0LjA1NzMwNzcgNDEuNjQ3ODE0NSwyMy45OTk0MDYyIDQxLjc0Mjk4MzgsMjMuODk4MDA3NCBDNDEuODQwNDYwMiwyMy43OTYwMzgxIDQxLjg5MTc5MzksMjMuNjU4OTg1NyA0MS44ODQ0Mzk5LDIzLjUxOTA4MSBDNDEuNTczOTg2MiwxOC4wNjkyMTQ3IDM2LjU4NTgxNzMsMTMuNjA1ODEyMSAzMC4wNzE2MjMxLDEyLjY0NzAxNTYgQzI4LjkzNjY1NzIsNS40OTQ2MTg2OSAyMi42ODMzMTM0LC0yLjg1MjI4NzgzZS0wNSAxNS4xMzcyNTM0LC0yLjg1MjI4NzgzZS0wNSBDNi43OTAxODUxLC0yLjg1MjI4NzgzZS0wNSAwLDYuNzE2MjUzNTYgMCwxNC45NzEyMDIzIEwwLDU2LjUzNzU5MjQgQzAsNTguMDc5MTExMyAxLjI2MzQ0NDUxLDU5LjMyNzU1NzcgMi44MjA3NjAyNyw1OS4zMjc1NTc3IEM0LjM3ODIyMDIyLDU5LjMyNzU1NzcgNS42NDE2NjQ3Myw1OC4wNzkxMTEzIDUuNjQxNjY0NzMsNTYuNTM3NTkyNCBMNS42NDE2NjQ3MywxNC45NzEyMDIzIEM1LjY0MTY2NDczLDkuNzkyNDQ1OTUgOS45MDEwNjc1Myw1LjU3OTc1OTQ4IDE1LjEzNzI1MzQsNS41Nzk3NTk0OCBDMTkuNTU3NzIzLDUuNTc5NzU5NDggMjMuMjUxMDEyNyw4LjU5ODA1MDQzIDI0LjMwMzIxMDIsMTIuNzM1NTc5MSIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00MS40MTE2NjM2LDI2LjY2NDA4MzcgTDEyLjUzNzYyNjgsMjYuNjY0MDgzNyBDMTEuNDk4MDI0MiwyNi42NjQwODM3IDEwLjY1Njc2MzksMjcuNDEwMTMzMiAxMC42NTY3NjM5LDI4LjMzMDU4ODkgQzEwLjY1Njc2MzksMjkuMjUwOTE2OCAxMS40OTgwMjQyLDI5Ljk5NzA5NDEgMTIuNTM3NjI2OCwyOS45OTcwOTQxIEw0MS40MTE2NjM2LDI5Ljk5NzA5NDEgQzQyLjQ1MTg0MzIsMjkuOTk3MDk0MSA0My4yOTMxMDM0LDI5LjI1MDkxNjggNDMuMjkzMTAzNCwyOC4zMzA1ODg5IEM0My4yOTMxMDM0LDI3LjQxMDY0NDMgNDIuNDUxODQzMiwyNi42NjQwODM3IDQxLjQxMTY2MzYsMjYuNjY0MDgzNyIgaWQ9IkZpbGwtNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4wMjk2MTMxLDM5LjI5NTE3NTggTDI3LjMwNzk1NzYsMzguNjYyOTIxMyBMMjYuNTg2LDM5LjI5NTE3NTggQzI2LjM4NzI3NjcsMzkuNDY5MzY4NCAyNC42NDM3NjY2LDQxLjA0ODc0MjMgMjQuNjQzNzY2Niw0Mi44NTQ2MjI2IEMyNC42NDM3NjY2LDQ0LjIxODk5MDcgMjUuODM4ODI0NSw0NS4zMjg5NDIzIDI3LjMwNzk1NzYsNDUuMzI4OTQyMyBDMjguNzc2OTM5Niw0NS4zMjg5NDIzIDI5Ljk3MjE0ODUsNDQuMjE4OTkwNyAyOS45NzIxNDg1LDQyLjg1NDYyMjYgQzI5Ljk3MTk5NzUsNDEuMDQ4NjAyIDI4LjIyODMzNjQsMzkuNDY5MjI4MSAyOC4wMjk2MTMxLDM5LjI5NTE3NTgiIGlkPSJGaWxsLTYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzYuMDIyMTg2LDM0LjYyODk2MTIgTDM1LjMwMDUzMDUsMzMuOTk2NzA2NyBMMzQuNTc4NTczLDM0LjYyODk2MTIgQzM0LjM3OTg0OTYsMzQuODAzMTUzNyAzMi42MzYzMzk1LDM2LjM4MjUyNzYgMzIuNjM2MzM5NSwzOC4xODg0MDc5IEMzMi42MzYzMzk1LDM5LjU1Mjc3NiAzMy44MzEzOTc1LDQwLjY2MjcyNzYgMzUuMzAwNTMwNSw0MC42NjI3Mjc2IEMzNi43Njk1MTI1LDQwLjY2MjcyNzYgMzcuOTY0NzIxNSwzOS41NTI3NzYgMzcuOTY0NzIxNSwzOC4xODg0MDc5IEMzNy45NjQ1NzA1LDM2LjM4MjM4NzQgMzYuMjIwOTA5NCwzNC44MDMwMTM1IDM2LjAyMjE4NiwzNC42Mjg5NjEyIiBpZD0iRmlsbC04Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLjcwMzA4NzksMzQuNjI4OTYxMiBMMTkuOTgxMjgxNCwzMy45OTY3MDY3IEwxOS4yNTk0NzQ4LDM0LjYyODk2MTIgQzE5LjA2MDc1MTUsMzQuODAzMTUzNyAxNy4zMTcyNDE0LDM2LjM4MjUyNzYgMTcuMzE3MjQxNCwzOC4xODg0MDc5IEMxNy4zMTcyNDE0LDM5LjU1Mjc3NiAxOC41MTI0NTAzLDQwLjY2MjcyNzYgMTkuOTgxNDMyNCw0MC42NjI3Mjc2IEMyMS40NTA0MTQ0LDQwLjY2MjcyNzYgMjIuNjQ1NjIzMywzOS41NTI3NzYgMjIuNjQ1NjIzMywzOC4xODg0MDc5IEMyMi42NDU0NzIzLDM2LjM4MjM4NzQgMjAuOTAxODExMiwzNC44MDMwMTM1IDIwLjcwMzA4NzksMzQuNjI4OTYxMiIgaWQ9IkZpbGwtMTAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
const img3 = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9Ijk1cHgiIGhlaWdodD0iOTVweCIgdmlld0JveD0iMCAwIDk1IDk1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MCAoNTQ5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iTElGRVNUWUxFLUNhbGMtKERlc2t0b3ArTW9iaWxlKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ik1vYmlsZS1MaWdodGJveCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwOC4wMDAwMDAsIC0yNTkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDkuMDAwMDAwLCAyNjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBzdHJva2U9IiM2OTc2ODQiIHN0cm9rZS13aWR0aD0iMC44IiBmaWxsPSIjRkZGRkZGIiBjeD0iNDYuNSIgY3k9IjQ2LjUiIHI9IjQ2LjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPGcgaWQ9IklDT04tcGFpbnQtZXh0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNy42Mzc5MzEsIDE2LjgzNjIwNykiIGZpbGw9IiM2ODc2ODQiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJwYWludC1leHQtaWNvbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjY1MzIxNjA5NCwyNS43NDAzNzczIEMtMC4yMTc2MjY0OTcsMjYuNjI3MjIwNyAtMC4yMTc2MjY0OTcsMjguMDY0Mzc5NSAwLjY1MzIxNjA5NCwyOC45NTEyMjI5IEwxLjc5MTI5ODIsMzAuMTA5MzY5MiBMNC41MTE2NTk0NywyOS4wMjYyMzgxIEwzLjQ4NjU4MDEyLDMxLjgzNDk2MzIgTDkuMjAyOTU3MjcsMzcuNjUzOTYzMiBMMTMuNTkyMDMyOCwzNS4wNTkyNyBMMTEuMzU4MDY0MywzOS44NDgyNDkxIEwxMy4yNTMxNDQ3LDQxLjc3Njg2MTMgQzE0LjEyMzg2NzEsNDIuNjYzNzA0OCAxNS41MzYyODE0LDQyLjY2MzcwNDggMTYuNDA2ODgzNiw0MS43NzY4NjEzIEwyNi43MzU5Mzc1LDMxLjI2MjQ5ODIgTDEwLjk4MjI3LDE1LjIyNTc2OTQgTDAuNjUzMjE2MDk0LDI1Ljc0MDM3NzMgWiIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzguNTk0OTUyNiw1LjU4MzYzODMzIEMzNy45MzU4MDk5LDYuMjU0NjE0MjcgMzYuODY3MzMyNyw2LjI1NDYxNDI3IDM2LjIwODY3MDgsNS41ODM2MzgzMyBDMzUuNTQ5NDA3OSw0LjkxMjU0MDAxIDM1LjU0OTQwNzksMy44MjUwMDM0MSAzNi4yMDg2NzA4LDMuMTU0NTE2OTcgQzM2Ljg2NzMzMjcsMi40ODM1NDEwMiAzNy45MzU4MDk5LDIuNDgzNTQxMDIgMzguNTk0OTUyNiwzLjE1NDUxNjk3IEMzOS4yNTQwOTUzLDMuODI1MDAzNDEgMzkuMjU0MDk1Myw0LjkxMjU0MDAxIDM4LjU5NDk1MjYsNS41ODM2MzgzMyBNMTIuMzM2MzU1NywxMi40OTA3ODY4IEMxMS45NTc3OTY0LDEyLjg3NTQwNzkgMTEuOTU3Nzk2NCwxMy41MDAxMjY1IDEyLjMzNjM1NTcsMTMuODg1MzU5NCBMMjguMDUzMjM3MSwyOS44ODQ1MTk1IEMyOC40MzE3OTY0LDMwLjI2OTI2MjkgMjkuMDQ0Nzc2MywzMC4yNjkyNjI5IDI5LjQyMzMzNTYsMjkuODg0MDMgTDMzLjI5OTkzMTUsMjUuOTM3ODM5NyBDMzMuNjc4MzcwNiwyNS41NTI5NzM5IDMzLjY3ODM3MDYsMjQuOTI4NSAzMy4yOTk5MzE1LDI0LjU0MzYzNDIgQzMxLjQ5NDI5MTYsMjIuNzA0OTY2OCAyOS43NDU4NzQzLDE5LjYxNTAyNjUgMzAuMTczMTIwOSwxNy4xNzQ2NDY4IEMzMC4zOTYyNDEzLDE1LjkwMzA1OTggMzEuMTkwNTA2NSwxNC45NjI5ODM4IDMyLjYwMjE5OTUsMTQuMjk5ODM5NyBDMzcuNjkwMjA5MiwxMS45MTAzNjc1IDQxLjA1ODE3MjUsOC41OTc3MDY4IDQxLjYxMjM2NjksNS40Mzc2NDYzIEM0MS44ODU5Nzc4LDMuODc0Njg3MiA0MS40NTY0NDcxLDIuNDYzMzQ5MzQgNDAuMzY5MjE2MiwxLjM1NzIxMTkgTDQwLjM2MDU2MDcsMS4zNDc3ODkxMiBDMzkuMjczNDUwMSwwLjI0MTc3NDA1OSAzNy44ODczNjI5LC0wLjE5NTU5MDE2IDM2LjM1MTQ4NzEsMC4wODI4MTAzOTkzIEMzMy4yNDc3NTc5LDAuNjQ3MTk4Njk4IDI5Ljk5MzM5ODUsNC4wNzU1MDI3MyAyNy42NDU1ODU3LDkuMjU0NzMyMTIgQzI2Ljk5NDczNzgsMTAuNjkyMDEzMiAyNi4wNzEzNjEsMTEuNTAwNTM3NCAyNC44MjIwNzkzLDExLjcyNjkyOTEgQzIyLjQyNDI1NjgsMTIuMTYyNTgwMSAxOS4zODg1Njk4LDEwLjM4MjUyOTcgMTcuNTgyOTI5OCw4LjU0NDU5NjU0IEMxNy4yMDQ0OTA4LDguMTU5MjQxMjIgMTYuNTkxMzkwNyw4LjE1OTI0MTIyIDE2LjIxMjk1MTYsOC41NDQ1OTY1NCIgaWQ9IkZpbGwtMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC02IiBwb2ludHM9IjMxLjEyMDYwMyA0NS4yMDg4OTUzIDMxLjEyMDYwMyA1Ny43MjQxMzc5IDM5LjkyODU0ODkgNTcuNzI0MTM3OSAzOS45Mjg1NDg5IDUwLjE1NDg3NDcgNDQuNjA3NzA0MSA1MC4xNTQ4NzQ3IDQ0LjYwNzcwNDEgNTcuNzI0MTM3OSA1My4wNDM4MDI0IDU3LjcyNDEzNzkgNTMuMDQzODAyNCA0NS4yMDg4OTUzIDQyLjA4MjA3ODIgMzcuMTU1NzY2OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTciIHBvaW50cz0iMjUuODIzNDc5MSA0My42ODM4MjM0IDI3Ljk3MTQwODUgNDYuNDQ0NTg4NSA0Mi4xNjM4MzY1IDM2LjIzOTkyNjUgNTUuNTc2MjA4NSA0Ni40NDQ3MDg3IDU3LjcyNDEzNzkgNDMuNjgzODIzNCA1My4zMTYzMTc4IDQwLjMzMDk1MDYgNTMuMzE2MzE3OCAzNC43NTIyMDQ5IDQ4LjgwODMyODMgMzQuNzUyMjA0OSA0OC44MDgzMjgzIDM2LjkwMTk5MDkgNDIuMTYzODM2NSAzMS44NDc4MDAyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="
const img4 = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9Ijk1cHgiIGhlaWdodD0iOTVweCIgdmlld0JveD0iMCAwIDk1IDk1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MCAoNTQ5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iTElGRVNUWUxFLUNhbGMtKERlc2t0b3ArTW9iaWxlKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ik1vYmlsZS1MaWdodGJveCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4My4wMDAwMDAsIC0yNTkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1ODQuMDAwMDAwLCAyNjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBzdHJva2U9IiM2OTc2ODQiIHN0cm9rZS13aWR0aD0iMC44IiBmaWxsPSIjRkZGRkZGIiBjeD0iNDYuNSIgY3k9IjQ2LjUiIHI9IjQ2LjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPGcgaWQ9IklDT04tcGFpbnQtaW50IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi44MzYyMDcsIDEzLjYyOTMxMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNS4wMjY5ODk3LDUxLjE3NDA2MTIgTDM4Ljg5MjUyODcsNTEuMTc0MDYxMiBDMzguMTI4NTM1Nyw0OS42NjU3NTE1IDM2LjgyNjYwNDQsNDcuNzI3MDAwNSAzNC42MTczMTA1LDQ1LjY2NzcwMTYgQzM0LjE4NjQ3NjUsNDUuMjY2MjQwNiAzMy42MDgwNDE4LDQ1LjAzNTk4MiAzMy4wMjk2MDcyLDQ1LjAzNTk4MiBDMzIuNDIxNjc2Niw0NS4wMzU5ODIgMzEuODI1OTU1NSw0NS4yNzM0MjQ4IDMxLjI1ODUyMTQsNDUuNzQxODU2OSBDMjkuNDkwMjE1OSw0Ny4yMDE5NDc1IDMwLjY5NjE2NDQsNDkuMDA1NzgyMiAzMS4xMDgwMTk2LDQ5LjUyNDEzODEgQzMxLjY1MjEyMjksNTAuMjA4NzA0IDMyLjIyMTQ5MTEsNTEuMTczNTc0MiAzMi43MjMyODQ3LDUyLjMyMTIxNDQgQzMzLjI1NDgxNTksNTEuNjI0MjI4NCAzNC4wODk0MDU4LDUxLjE3NDA2MTIgMzUuMDI2OTg5Nyw1MS4xNzQwNjEyIiBpZD0iRmlsbC0xIiBmaWxsPSIjNjg3Njg0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTU4LjM0NjQ0NTMsNDUuODgzMDQ1IEM1Ny43ODgxMTU5LDQ1LjM4MTgyOTcgNTcuMjAxNTc4NSw0NS4xMjc3Njk0IDU2LjYwMjc4MTksNDUuMTI3NzY5NCBDNTYuMDMzMzgzNSw0NS4xMjc3Njk0IDU1LjQ2MzUwOTEsNDUuMzc0MjczIDU1LjAzOTQzNTksNDUuODAzODMwMyBDNTIuODY0NDM5LDQ4LjAwNzI0OTQgNTEuNTgyNjk3Niw1MC4wODE2ODQgNTAuODMwNDgyNCw1MS42OTU0MjI3IEw1NC42MzYwNzI0LDUxLjY5NTQyMjcgQzU1LjU1OTIwMjMsNTEuNjk1NDIyNyA1Ni4zODA5MjYsNTIuMTc3MjI1MiA1Ni45MDQwMjUsNTIuOTIyMzM4NCBDNTcuMzk3OTYzOCw1MS42OTQyNTAxIDU3Ljk1ODkxMTYsNTAuNjYyNjM1MiA1OC40OTQ4NjQ5LDQ5LjkyOTg5OTMgQzU4LjkwMDEzMjgsNDkuMzc1NTI2OCA2MC4wODc4NDczLDQ3LjQ0NTMyMDIgNTguMzQ2NDQ1Myw0NS44ODMwNDUiIGlkPSJGaWxsLTMiIGZpbGw9IiM2ODc2ODQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTYuMDMxNjA5Miw1Ny44OTE2ODIzIEw1Ni4wMzE2MDkyLDU0LjAzNTczNjMgQzU2LjAzMTYwOTIsNTMuMDkwMzY2MSA1NS4yNjY1MDEzLDUyLjMyMTIxNDQgNTQuMzI2MTAxMyw1Mi4zMjEyMTQ0IEwzNS4zMjQzNTI3LDUyLjMyMTIxNDQgQzM0LjM4NDA3MzQsNTIuMzIxMjE0NCAzMy42MTg5NjU1LDUzLjA5MDM2NjEgMzMuNjE4OTY1NSw1NC4wMzU3MzYzIEwzMy42MTg5NjU1LDU3Ljg5MTY4MjMgQzMzLjYxODk2NTUsNTguODM3Mjk1MSAzNC4zODQwNzM0LDU5LjYwNjQ0NjggMzUuMzI0MzUyNyw1OS42MDY0NDY4IEw1NC4zMjU4NjAxLDU5LjYwNjQ0NjggQzU1LjI2NjUwMTMsNTkuNjA2NDQ2OCA1Ni4wMzE2MDkyLDU4LjgzNzI5NTEgNTYuMDMxNjA5Miw1Ny44OTE2ODIzIiBpZD0iRmlsbC02IiBmaWxsPSIjNjg3Njg0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtOCIgZmlsbD0iIzY4NzY4NCIgcG9pbnRzPSI1Mi4wNzY0MzY4IDU4LjI4MTg1OTEgNTIuMzU1MDQyNCA2MC45MzEwMzQ1IDUzLjc3NTI5OCA2MC45MzEwMzQ1IDU0LjA1NDAyMyA1OC4yODE4NTkxIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTAiIGZpbGw9IiM2ODc2ODQiIHBvaW50cz0iMzUuNTk2NTUxNyA1OC4yODE4NTkxIDM1Ljg3NDgxNTkgNjAuOTMxMDM0NSAzNy4yOTU3NTQ0IDYwLjkzMTAzNDUgMzcuNTc0MTM3OSA1OC4yODE4NTkxIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ5LjgzNDgzMjIsNTAuOTk2NjI2NyBDNTAuNjc4MDQ3OSw0OS4yMTU2NDQgNTIuMTYxOTUzNCw0Ni45OTE0NzU4IDU0Ljc3NDg3NjYsNDQuNjM3MjcyNiBDNTUuMTQzMzMyMyw0NC4zMDQ5NzQ0IDU1LjU3MTE2NDEsNDQuMDU1MDg0MiA1Ni4wMzE2MDkyLDQzLjg5NDk5NDUgQzU0LjM3NTU1MDMsNDAuMzAzODIyNyA0OS45OTgwMjMyLDM3Ljc1MDc0OTYgNDUuMTU1MDcxOCwzNy43NTA3NDk2IEM0MC4zMTI0OTM4LDM3Ljc1MDc0OTYgMzUuOTM0MzQ0Miw0MC4zMDM0NTkyIDM0LjI3ODE2MDksNDMuODk0NzUyMSBDMzQuNzM4ODU1LDQ0LjA1NDg0MTggMzUuMTY2NTYyMyw0NC4zMDQ5NzQ0IDM1LjUzNTM5MTQsNDQuNjM3MjcyNiBDMzguMTQ4NTYzNiw0Ni45OTE0NzU4IDM5LjYzMjM0NDYsNDkuMjE1NjQ0IDQwLjQ3NTU2MDMsNTAuOTk2NjI2NyBMNDkuODM0ODMyMiw1MC45OTY2MjY3IFoiIGlkPSJGaWxsLTEyIiBmaWxsPSIjNjg3Njg0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InBhaW50LWludC1pY29uIiBmaWxsPSIjNjg3Njg0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQxLjYwMzIxOTUsMjcuNjEwOTQyNyBMMzguNTMzOTQ0NywyNC41MjEwMDEzIEwzOC41Mzg1NzgxLDI0LjUxNjMyNzQgQzQwLjMzNjk1NDcsMjIuNzAyMjM4MyA0MC4zMzY5NTQ3LDE5Ljc2MTQ5MjggMzguNTM4NTc4MSwxNy45NDc0MDM3IEwyMi4wNzkzMzAxLDEuNDM4MTk2NjUgQzIwLjI4MTE5NzUsLTAuMzc2MDE1NDQzIDE3LjM2NTkyMjksLTAuMzc2MDE1NDQzIDE1LjU2NzU0NjQsMS40MzgxOTY2NSBMMTMuMjU1OTU3NywzLjc2OTczNTkzIEMxMS40NTc4MjUxLDUuNTgzODI1MDIgMTEuNDU3ODI1MSw4LjUyNDU3MDU3IDEzLjI1NTk1NzcsMTAuMzM4NjU5NyBMMjkuNzE1NDQ5NiwyNi44NDc4NjY3IEMzMS41MTM3MDQyLDI4LjY2MTk1NTggMzQuNDI4ODU2OCwyOC42NjE5NTU4IDM2LjIyNzIzMzMsMjYuODQ3ODY2NyBMMzYuMjY1MDMyMywyNi44MDk4NjA1IEwzOC4xOTk4NTA4LDI4Ljc1NDk0MTggTDMzLjQ4MzI3MzQsMzMuNTEzNTg5NCBMMTguODk1MTk1MywyMy4xOTc5MTggQzE4LjI3NTUzNjQsMjIuODgwNDYxNiAxNy41MjQ0MzQ3LDIzLjAwMDUwNzEgMTcuMDMyNTYwNiwyMy40OTU4MTc3IEwxMy40MDE1NDQ2LDI3LjAyNDg2IEMxMS40MTM2ODU3LDI1Ljk4ODIzNzcgOS40MDYzMTc1NCwyNi43NDA2MTI5IDcuNzQwNDgxMjIsMjguNDIxOTg3OCBMMS44MTY4OTc5OSwzNC41MDM5NjQ3IEMtMC4yNDUzMzk1NzMsMzYuNTg0MjIwMiAtMC43NDE0ODEyNzgsMzkuNTI3MTc5NyAxLjMyMDc1NjI5LDQxLjYwNzQzNTMgQzMuMzgyMjYyMjYsNDMuNjg2ODI5OCA2LjAyNDQwODg4LDQzLjMzNDU2NTIgOC4wODY2NDY0NSw0MS4yNTUwNDc2IEwxNC4wMTAyMjk3LDM1LjE3MTQ3MTggQzE1LjY3NjkxOTUsMzMuNDkxMDgwOSAxNi42OTczNjkyLDMxLjMxNzM0NzMgMTUuNjcwNDU3MSwyOS4zMTI4NTgyIEwxOC40Nzc2OTk4LDI2LjYxNjAxNjUgTDMzLjA2NTc3NzksMzYuOTMwODI3IEMzMy42ODUzMTQ5LDM3LjI0ODQwNjQgMzQuNDM2NTM4NSwzNy4xMjg0ODM5IDM0LjkyODQxMjYsMzYuNjMzMDUwMiBMNDEuNjA0MDczLDI5Ljg5ODk0MDkgQzQxLjkwNDc1NzYsMjkuNTk1NTA2MyA0Mi4wNzMxNDU4LDI5LjE4Mzk1NjkgNDIuMDczMTQ1OCwyOC43NTQ5NDE4IEM0Mi4wNzMxNDU4LDI4LjMyNTkyNjggNDEuOTA0MDI2LDI3LjkxNDM3NzQgNDEuNjAzMjE5NSwyNy42MTA5NDI3IiBpZD0iRmlsbC0xNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xNyIgZmlsbD0iI0ZFRkVGRSIgcG9pbnRzPSIxMi41MjQ3MTI2IDI2LjE2MDU1MTUgMTYuMzI1OTEyMSAyOS44MDMyMjM0IDE3LjEzOTA4MDUgMjguODg1MjgzNiAxMy4yNTkwMTY4IDI1LjE2NzE2NjQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xOSIgZmlsbD0iI0ZFRkVGRSIgcG9pbnRzPSIzOS4zNDcwMjU2IDIzLjE4MDI4NDkgMzUuNTk2NTUxNyAyNi44Nzg5MzQxIDM2LjU0MDYyMTEgMjcuODE2MzQxOCA0MC4yMTA5MTk1IDIzLjk3NzE2NjQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="


const fourData = dummyData.slice(-4);
const threeData = dummyData.slice(-3);
const twoData = dummyData.slice(-2);

const customStyle = {
    color: '#dc3545', // Set the color to red
    fontWeight: 'bold', // You can add more styles as needed

};

export default function OutdoorLiving() {
    const [value, setValue] = React.useState(0);
    const [data, setData] = useState([]);
    const [detailDTO, setDetailDTO] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        dataInterestRates(true)
    }, []);

    const dataInterestRates = async (needRefreshPage) => {
        try {
            const response = await axios.get(`${config.baseURL}/article?offset=0&limit=10&articleHeader=1&articleSubHeader=3`);
            setData(response.data.data);
            setDetailDTO(response.data.detailDTO);

            console.log('response', response)
            if (needRefreshPage) {
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    console.log('data', data)
    console.log('detailDTO', detailDTO)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const breadcrumbs = [
        <button className="nav-link" key="1" style={{ color: "white" }} textDecoration='none' onClick={() => navigate(RoutesPage.RouteLifeStyle)}>
            Life Style
        </button>,
        <Typography key="3" style={{ color: "white" }}>
            Outdoor Living
        </Typography>,
    ];


    return (
        <div>
            {<HeaderNews />}
            <div className='box-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container direction="row" justifyContent={"space-between"} display="flex" className='box-content'>
                    <MainTabs />
                    <Search />
                </Grid>
                <SubTabsLifeStyle />
                {/* Main Title */}
                <div className="center " style={{
                    textAlign: 'center',
                    height: '300px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    marginBottom: "30px",
                }}>
                    <div className="m-2">
                        <Breadcrumbs separator="›" style={{ color: "white" }} aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>
                    <h1 style={{
                        color: 'black',
                        fontFamily: 'Roboto',
                        fontSize: '68px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        marginBottom: 5,
                        marginTop: 80,
                    }}>
                        Outdoor Living</h1>
                    <p style={{
                        color: 'black',
                        fontFamily: 'Roboto',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 300,
                        lineHeight: 'normal',
                        marginTop: 10,
                        paddingRight: '150px',
                        paddingLeft: '150px'
                    }}>
                        Embracing the outdoors is part and parcel of living in Australia – and we love it! Whether you're seeking design ideas for outdoor living, gardening tips, advice on swimming pools, decking or house facades, you'll find it all here. 
                    </p>
                </div>

                {/* Modal 1 */}
                <div className="p-0 m-0" style={{ height: '677px' }}>
                    <div className="row align-items-center gap-2">
                        <div className="col-9 h-400">
                            <img src={img} style={{ height: '540px', width: '100%', }} />
                            <div style={{ padding: "0px 0px 0px" }}>
                                <h6 className="mt-4"
                                    style={{
                                        color: '#6E6E6E',
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: 300,
                                        lineHeight: 'normal',
                                        textTransform: 'uppercase',
                                    }}>
                                    Tiny Homes
                                </h6>
                                <h5 className=" mt-3" style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: 'normal',
                                    textTransform: 'capitalize',
                                }}>
                                    Tiny home rental income
                                </h5>
                                <h6 className="mt-2"
                                    style={{
                                        color: '#6E6E6E',
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: 300,
                                        lineHeight: 'normal',
                                        textTransform: 'capitalize',
                                    }}>
                                    Whether it’s the need for more space, flexibility, or a way to make a side income, a tiny home could be the answer.
                                </h6>
                            </div>
                        </div>
                        <div className="col" style={{ alignSelf: 'start' }}>
                            <a href="#" style={{ textDecoration: 'none' }}>
                                <Card sx={{ maxWidth: '100%' }}>
                                    <CardMedia
                                        sx={{ height: 400 }}
                                        image={img}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <div style={{ padding: "0px 0px 0px" }}>
                                            <h1 className="mt-1"
                                                style={{
                                                    color: '#6E6E6E',
                                                    fontFamily: 'Roboto',
                                                    fontSize: '12px',
                                                    fontStyle: 'normal',
                                                    fontWeight: 300,
                                                    lineHeight: 'normal',
                                                }}>
                                                aas
                                            </h1>
                                            <h4 style={{
                                                color: '#000',
                                                fontFamily: 'Roboto',
                                                fontSize: '24px',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                lineHeight: 'normal',
                                            }}>
                                                12 ways to put the good times into your next move
                                            </h4>
                                            <a href="#" size="small">Read More</a>
                                        </div>
                                    </CardContent>
                                    <CardContent style={{ textAlign: '-webkit-right' }}>
                                        <img style={{ height: 35 }} src="https://content.aimatch.com/rea/13813/rea_logo.svg" />
                                    </CardContent>
                                </Card>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Modal 2 */}
                <div className="p-0" style={{ marginTop: '60px', }}>
                    <div className="row">
                        {threeData.map(item => (
                            <div key={item.id} className="col-4">
                                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                                <div style={{ padding: "0px 0px 0px" }}>
                                    <h6 className="mt-4 text-center"
                                        style={{
                                            color: '#6E6E6E',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: 'normal',
                                            textTransform: 'uppercase',
                                        }}>
                                        {item.location}
                                    </h6>
                                    <h5 className=" mt-3 text-center" style={{
                                        color: '#000',
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        lineHeight: 'normal',
                                        textTransform: 'capitalize',
                                    }}>
                                        {item.newsTitle}
                                    </h5>
                                    <h6 className="mt-4 text-center"
                                        style={{
                                            color: '#6E6E6E',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: 'normal',
                                            textTransform: 'capitalize',
                                        }}>
                                        {item.newsTitle}
                                    </h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50, backgroundColor: '#333f48', height: 400 }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white', marginTop: 15, marginBottom: 10, fontFamily: 'Playfair Display , serif' }}>Lifestyle Shows</h2>
                    <hr style={{ width: '100px', border: '2px solid white', margin: 'auto' }}></hr>
                    <br></br>
                    <div container>
                        <div className="row align-items-center gap-1">
                            {fourData.map(item => (
                                <div className="col" style={{ alignSelf: 'start' }}>
                                    <a href="#" style={{ textDecoration: 'none' }}>
                                        <Card sx={{ maxWidth: '100%' }}>
                                            <CardMedia
                                                sx={{ height: 143, width: 225 }}
                                                image={img}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <div style={{ padding: "0px 0px 0px", textAlign: "center" }}>
                                                    <h1 className="mt-1"
                                                        style={{
                                                            color: '#6E6E6E',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 300,
                                                            lineHeight: 'normal',
                                                        }}>
                                                        {item.location}
                                                    </h1>
                                                    <h4 style={{
                                                        color: '#000',
                                                        fontFamily: 'Roboto',
                                                        fontSize: '24px',
                                                        fontStyle: 'normal',
                                                        fontWeight: 400,
                                                        lineHeight: 'normal',
                                                    }}>
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='box-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="p-0" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h2 style={{ color: 'black', marginBottom: 55, fontFamily: 'Playfair Display , serif' }}>Life & Home Hacks</h2>
                    <div className="row">
                        {twoData.map(item => (
                            <div key={item.id} className="col-4">
                                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                                <div style={{ padding: "0px 0px 0px" }}>
                                    <h1 className="mt-4 text-center"
                                        style={{
                                            color: '#6E6E6E',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: 'normal',
                                            textTransform: 'uppercase',
                                        }}>
                                        {item.location}
                                    </h1>
                                    <h4 className=" mt-3 text-center" style={{
                                        color: '#000',
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontStyle: 'bold',
                                        fontWeight: 600,
                                        lineHeight: 'bold',
                                        textTransform: 'capitalize',
                                    }}>
                                        {item.newsTitle}
                                    </h4>
                                </div>
                            </div>
                        ))}
                        <div className="col-4">
                            <div className="row">
                                {threeData.map(item => (
                                    <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                                        <Paper
                                            sx={{
                                                padding: 0,
                                                margin: 0,
                                                maxWidth: 300,
                                                flexGrow: 1,
                                                boxShadow: 'none',
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                            }}
                                        >
                                            <Grid container spacing={2}>
                                                <Grid item sm={5} style={{ paddingRight: 7 }}>
                                                    <ButtonBase sx={{ width: 128, height: 90 }}>
                                                        <img alt="complex" src={item.image}
                                                            style={{
                                                                maxWidth: '100%',
                                                                height: '100%'
                                                            }} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                                                    <h1 className="mt-1"
                                                        style={{
                                                            color: '#6E6E6E',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 300,
                                                            lineHeight: 'normal',
                                                            textTransform: 'uppercase',
                                                            width: '210px',
                                                        }}>
                                                        {item.location}
                                                    </h1>
                                                    <h4 style={{
                                                        color: '#000',
                                                        fontFamily: 'Roboto',
                                                        fontSize: '18px',
                                                        fontStyle: 'bold',
                                                        fontWeight: 600,
                                                        lineHeight: 'bold',
                                                        textTransform: 'capitalize',
                                                        width: '210px',
                                                    }}>
                                                        {item.newsTitle}
                                                    </h4>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {<BannerAds />}

                <div className="p-0" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h2 style={{ color: 'black', marginBottom: 55, fontFamily: 'Playfair Display , serif' }}>Indoor Style</h2>
                    <div className="row">
                        {twoData.map(item => (
                            <div key={item.id} className="col-4">
                                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                                <div style={{ padding: "0px 0px 0px" }}>
                                    <h1 className="mt-4 text-center"
                                        style={{
                                            color: '#6E6E6E',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: 'normal',
                                            textTransform: 'uppercase',
                                        }}>
                                        {item.location}
                                    </h1>
                                    <h4 className=" mt-3 text-center" style={{
                                        color: '#000',
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontStyle: 'bold',
                                        fontWeight: 600,
                                        lineHeight: 'bold',
                                        textTransform: 'capitalize',
                                    }}>
                                        {item.newsTitle}
                                    </h4>
                                </div>
                            </div>
                        ))}
                        <div className="col-4">
                            <div className="row">
                                {threeData.map(item => (
                                    <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                                        <Paper
                                            sx={{
                                                padding: 0,
                                                margin: 0,
                                                maxWidth: 300,
                                                flexGrow: 1,
                                                boxShadow: 'none',
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                            }}
                                        >
                                            <Grid container spacing={2}>
                                                <Grid item sm={5} style={{ paddingRight: 7 }}>
                                                    <ButtonBase sx={{ width: 128, height: 90 }}>
                                                        <img alt="complex" src={item.image}
                                                            style={{
                                                                maxWidth: '100%',
                                                                height: '100%'
                                                            }} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                                                    <h1 className="mt-1"
                                                        style={{
                                                            color: '#6E6E6E',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 300,
                                                            lineHeight: 'normal',
                                                            textTransform: 'uppercase',
                                                            width: '210px',
                                                        }}>
                                                        {item.location}
                                                    </h1>
                                                    <h4 style={{
                                                        color: '#000',
                                                        fontFamily: 'Roboto',
                                                        fontSize: '18px',
                                                        fontStyle: 'bold',
                                                        fontWeight: 600,
                                                        lineHeight: 'bold',
                                                        textTransform: 'capitalize',
                                                        width: '210px',
                                                    }}>
                                                        {item.newsTitle}
                                                    </h4>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-0" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h2 style={{ color: 'black', marginBottom: 55, fontFamily: 'Playfair Display , serif' }}>Renovating</h2>
                    <div className="row">
                        {twoData.map(item => (
                            <div key={item.id} className="col-4">
                                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                                <div style={{ padding: "0px 0px 0px" }}>
                                    <h1 className="mt-4 text-center"
                                        style={{
                                            color: '#6E6E6E',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: 'normal',
                                            textTransform: 'uppercase',
                                        }}>
                                        {item.location}
                                    </h1>
                                    <h4 className=" mt-3 text-center" style={{
                                        color: '#000',
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontStyle: 'bold',
                                        fontWeight: 600,
                                        lineHeight: 'bold',
                                        textTransform: 'capitalize',
                                    }}>
                                        {item.newsTitle}
                                    </h4>
                                </div>
                            </div>
                        ))}
                        <div className="col-4">
                            <div className="row">
                                {threeData.map(item => (
                                    <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                                        <Paper
                                            sx={{
                                                padding: 0,
                                                margin: 0,
                                                maxWidth: 300,
                                                flexGrow: 1,
                                                boxShadow: 'none',
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                            }}
                                        >
                                            <Grid container spacing={2}>
                                                <Grid item sm={5} style={{ paddingRight: 7 }}>
                                                    <ButtonBase sx={{ width: 128, height: 90 }}>
                                                        <img alt="complex" src={item.image}
                                                            style={{
                                                                maxWidth: '100%',
                                                                height: '100%'
                                                            }} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                                                    <h1 className="mt-1"
                                                        style={{
                                                            color: '#6E6E6E',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 300,
                                                            lineHeight: 'normal',
                                                            textTransform: 'uppercase',
                                                            width: '210px',
                                                        }}>
                                                        {item.location}
                                                    </h1>
                                                    <h4 style={{
                                                        color: '#000',
                                                        fontFamily: 'Roboto',
                                                        fontSize: '18px',
                                                        fontStyle: 'bold',
                                                        fontWeight: 600,
                                                        lineHeight: 'bold',
                                                        textTransform: 'capitalize',
                                                        width: '210px',
                                                    }}>
                                                        {item.newsTitle}
                                                    </h4>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-0" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <hr style={{ width: '600px', border: '2px solid black', margin: 'auto' }}></hr>
                    <h3 style={{ color: 'black', marginTop: 15, marginBottom: 55, fontFamily: 'Playfair Display , serif' }}>Estimate your renovation costs</h3>
                    <div className="row">
                        <div className="col">
                            <a href="#" style={{ textDecoration: 'none', color: '#6c757d' }}>
                                <img src={img1} style={{ height: '95px', width: '100%', }} />
                                <p>Kitchen</p>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" style={{ textDecoration: 'none', color: '#6c757d' }}>
                                <img src={img2} style={{ height: '95px', width: '100%', }} />
                                <p>Kitchen</p>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" style={{ textDecoration: 'none', color: '#6c757d' }}>
                                <img src={img3} style={{ height: '95px', width: '100%', }} />
                                <p>Kitchen</p>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" style={{ textDecoration: 'none', color: '#6c757d' }}>
                                <img src={img4} style={{ height: '95px', width: '100%', }} />
                                <p>Kitchen</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-0" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h2 style={{ color: 'black', marginBottom: 55, fontFamily: 'Playfair Display , serif' }}>Outdoor Living</h2>
                    <div className="row">
                        {twoData.map(item => (
                            <div key={item.id} className="col-4">
                                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                                <div style={{ padding: "0px 0px 0px" }}>
                                    <h1 className="mt-4 text-center"
                                        style={{
                                            color: '#6E6E6E',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: 'normal',
                                            textTransform: 'uppercase',
                                        }}>
                                        {item.location}
                                    </h1>
                                    <h4 className=" mt-3 text-center" style={{
                                        color: '#000',
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontStyle: 'bold',
                                        fontWeight: 600,
                                        lineHeight: 'bold',
                                        textTransform: 'capitalize',
                                    }}>
                                        {item.newsTitle}
                                    </h4>
                                </div>
                            </div>
                        ))}
                        <div className="col-4">
                            <div className="row">
                                {threeData.map(item => (
                                    <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                                        <Paper
                                            sx={{
                                                padding: 0,
                                                margin: 0,
                                                maxWidth: 300,
                                                flexGrow: 1,
                                                boxShadow: 'none',
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                            }}
                                        >
                                            <Grid container spacing={2}>
                                                <Grid item sm={5} style={{ paddingRight: 7 }}>
                                                    <ButtonBase sx={{ width: 128, height: 90 }}>
                                                        <img alt="complex" src={item.image}
                                                            style={{
                                                                maxWidth: '100%',
                                                                height: '100%'
                                                            }} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                                                    <h1 className="mt-1"
                                                        style={{
                                                            color: '#6E6E6E',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 300,
                                                            lineHeight: 'normal',
                                                            textTransform: 'uppercase',
                                                            width: '210px',
                                                        }}>
                                                        {item.location}
                                                    </h1>
                                                    <h4 style={{
                                                        color: '#000',
                                                        fontFamily: 'Roboto',
                                                        fontSize: '18px',
                                                        fontStyle: 'bold',
                                                        fontWeight: 600,
                                                        lineHeight: 'bold',
                                                        textTransform: 'capitalize',
                                                        width: '210px',
                                                    }}>
                                                        {item.newsTitle}
                                                    </h4>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-0" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h2 style={{ color: 'black', marginBottom: 55, fontFamily: 'Playfair Display , serif' }}>Dream Homes</h2>
                    <div className="row">
                        {twoData.map(item => (
                            <div key={item.id} className="col-4">
                                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                                <div style={{ padding: "0px 0px 0px" }}>
                                    <h1 className="mt-4 text-center"
                                        style={{
                                            color: '#6E6E6E',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: 'normal',
                                            textTransform: 'uppercase',
                                        }}>
                                        {item.location}
                                    </h1>
                                    <h4 className=" mt-3 text-center" style={{
                                        color: '#000',
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontStyle: 'bold',
                                        fontWeight: 600,
                                        lineHeight: 'bold',
                                        textTransform: 'capitalize',
                                    }}>
                                        {item.newsTitle}
                                    </h4>
                                </div>
                            </div>
                        ))}
                        <div className="col-4">
                            <div className="row">
                                {threeData.map(item => (
                                    <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                                        <Paper
                                            sx={{
                                                padding: 0,
                                                margin: 0,
                                                maxWidth: 300,
                                                flexGrow: 1,
                                                boxShadow: 'none',
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                            }}
                                        >
                                            <Grid container spacing={2}>
                                                <Grid item sm={5} style={{ paddingRight: 7 }}>
                                                    <ButtonBase sx={{ width: 128, height: 90 }}>
                                                        <img alt="complex" src={item.image}
                                                            style={{
                                                                maxWidth: '100%',
                                                                height: '100%'
                                                            }} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                                                    <h1 className="mt-1"
                                                        style={{
                                                            color: '#6E6E6E',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 300,
                                                            lineHeight: 'normal',
                                                            textTransform: 'uppercase',
                                                            width: '210px',
                                                        }}>
                                                        {item.location}
                                                    </h1>
                                                    <h4 style={{
                                                        color: '#000',
                                                        fontFamily: 'Roboto',
                                                        fontSize: '18px',
                                                        fontStyle: 'bold',
                                                        fontWeight: 600,
                                                        lineHeight: 'bold',
                                                        textTransform: 'capitalize',
                                                        width: '210px',
                                                    }}>
                                                        {item.newsTitle}
                                                    </h4>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-0" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h2 style={{ color: 'black', marginBottom: 55, fontFamily: 'Playfair Display , serif' }}>Travel</h2>
                    <div className="row">
                        {twoData.map(item => (
                            <div key={item.id} className="col-4">
                                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                                <div style={{ padding: "0px 0px 0px" }}>
                                    <h1 className="mt-4 text-center"
                                        style={{
                                            color: '#6E6E6E',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: 'normal',
                                            textTransform: 'uppercase',
                                        }}>
                                        {item.location}
                                    </h1>
                                    <h4 className=" mt-3 text-center" style={{
                                        color: '#000',
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontStyle: 'bold',
                                        fontWeight: 600,
                                        lineHeight: 'bold',
                                        textTransform: 'capitalize',
                                    }}>
                                        {item.newsTitle}
                                    </h4>
                                </div>
                            </div>
                        ))}
                        <div className="col-4">
                            <div className="row">
                                {threeData.map(item => (
                                    <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                                        <Paper
                                            sx={{
                                                padding: 0,
                                                margin: 0,
                                                maxWidth: 300,
                                                flexGrow: 1,
                                                boxShadow: 'none',
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                            }}
                                        >
                                            <Grid container spacing={2}>
                                                <Grid item sm={5} style={{ paddingRight: 7 }}>
                                                    <ButtonBase sx={{ width: 128, height: 90 }}>
                                                        <img alt="complex" src={item.image}
                                                            style={{
                                                                maxWidth: '100%',
                                                                height: '100%'
                                                            }} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                                                    <h1 className="mt-1"
                                                        style={{
                                                            color: '#6E6E6E',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 300,
                                                            lineHeight: 'normal',
                                                            textTransform: 'uppercase',
                                                            width: '210px',
                                                        }}>
                                                        {item.location}
                                                    </h1>
                                                    <h4 style={{
                                                        color: '#000',
                                                        fontFamily: 'Roboto',
                                                        fontSize: '18px',
                                                        fontStyle: 'bold',
                                                        fontWeight: 600,
                                                        lineHeight: 'bold',
                                                        textTransform: 'capitalize',
                                                        width: '210px',
                                                    }}>
                                                        {item.newsTitle}
                                                    </h4>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-0" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h2 style={{ color: 'black', marginBottom: 55, fontFamily: 'Playfair Display , serif' }}>The Block</h2>
                    <div className="row">
                        {twoData.map(item => (
                            <div key={item.id} className="col-4">
                                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                                <div style={{ padding: "0px 0px 0px" }}>
                                    <h1 className="mt-4 text-center"
                                        style={{
                                            color: '#6E6E6E',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: 'normal',
                                            textTransform: 'uppercase',
                                        }}>
                                        {item.location}
                                    </h1>
                                    <h4 className=" mt-3 text-center" style={{
                                        color: '#000',
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontStyle: 'bold',
                                        fontWeight: 600,
                                        lineHeight: 'bold',
                                        textTransform: 'capitalize',
                                    }}>
                                        {item.newsTitle}
                                    </h4>
                                </div>
                            </div>
                        ))}
                        <div className="col-4">
                            <div className="row">
                                {threeData.map(item => (
                                    <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                                        <Paper
                                            sx={{
                                                padding: 0,
                                                margin: 0,
                                                maxWidth: 300,
                                                flexGrow: 1,
                                                boxShadow: 'none',
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                            }}
                                        >
                                            <Grid container spacing={2}>
                                                <Grid item sm={5} style={{ paddingRight: 7 }}>
                                                    <ButtonBase sx={{ width: 128, height: 90 }}>
                                                        <img alt="complex" src={item.image}
                                                            style={{
                                                                maxWidth: '100%',
                                                                height: '100%'
                                                            }} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                                                    <h1 className="mt-1"
                                                        style={{
                                                            color: '#6E6E6E',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 300,
                                                            lineHeight: 'normal',
                                                            textTransform: 'uppercase',
                                                            width: '210px',
                                                        }}>
                                                        {item.location}
                                                    </h1>
                                                    <h4 style={{
                                                        color: '#000',
                                                        fontFamily: 'Roboto',
                                                        fontSize: '18px',
                                                        fontStyle: 'bold',
                                                        fontWeight: 600,
                                                        lineHeight: 'bold',
                                                        textTransform: 'capitalize',
                                                        width: '210px',
                                                    }}>
                                                        {item.newsTitle}
                                                    </h4>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-0" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h2 style={{ color: 'black', marginBottom: 55, fontFamily: 'Playfair Display , serif' }}>Organising & Cleaning</h2>
                    <div className="row">
                        {twoData.map(item => (
                            <div key={item.id} className="col-4">
                                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                                <div style={{ padding: "0px 0px 0px" }}>
                                    <h1 className="mt-4 text-center"
                                        style={{
                                            color: '#6E6E6E',
                                            fontFamily: 'Roboto',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: 'normal',
                                            textTransform: 'uppercase',
                                        }}>
                                        {item.location}
                                    </h1>
                                    <h4 className=" mt-3 text-center" style={{
                                        color: '#000',
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontStyle: 'bold',
                                        fontWeight: 600,
                                        lineHeight: 'bold',
                                        textTransform: 'capitalize',
                                    }}>
                                        {item.newsTitle}
                                    </h4>
                                </div>
                            </div>
                        ))}
                        <div className="col-4">
                            <div className="row">
                                {threeData.map(item => (
                                    <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                                        <Paper
                                            sx={{
                                                padding: 0,
                                                margin: 0,
                                                maxWidth: 300,
                                                flexGrow: 1,
                                                boxShadow: 'none',
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                            }}
                                        >
                                            <Grid container spacing={2}>
                                                <Grid item sm={5} style={{ paddingRight: 7 }}>
                                                    <ButtonBase sx={{ width: 128, height: 90 }}>
                                                        <img alt="complex" src={item.image}
                                                            style={{
                                                                maxWidth: '100%',
                                                                height: '100%'
                                                            }} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                                                    <h1 className="mt-1"
                                                        style={{
                                                            color: '#6E6E6E',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 300,
                                                            lineHeight: 'normal',
                                                            textTransform: 'uppercase',
                                                            width: '210px',
                                                        }}>
                                                        {item.location}
                                                    </h1>
                                                    <h4 style={{
                                                        color: '#000',
                                                        fontFamily: 'Roboto',
                                                        fontSize: '18px',
                                                        fontStyle: 'bold',
                                                        fontWeight: 600,
                                                        lineHeight: 'bold',
                                                        textTransform: 'capitalize',
                                                        width: '210px',
                                                    }}>
                                                        {item.newsTitle}
                                                    </h4>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal 2 */}
                <div style={{ textAlign: 'center', marginTop: 50 }}>
                    <div container>
                        <div className="row align-items-center gap-1">
                            {threeData.map(item => (
                                <div className="col" style={{ alignSelf: 'start' }}>
                                    <a href="#" style={{ textDecoration: 'none' }}>
                                        <Card sx={{ maxWidth: '100%' }}>
                                            <CardMedia
                                                sx={{ height: 255, width: 340 }}
                                                image={img}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <div style={{ padding: "0px 0px 0px", textAlign: "center" }}>
                                                    <h1 className=""
                                                        style={{
                                                            color: '#6E6E6E',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 300,
                                                            lineHeight: 'normal',
                                                            marginTop: '50px'
                                                        }}>
                                                        {item.location}
                                                    </h1>
                                                    <h4 style={{
                                                        color: '#000',
                                                        fontFamily: 'Roboto',
                                                        fontSize: '24px',
                                                        fontStyle: 'normal',
                                                        fontWeight: 400,
                                                        lineHeight: 'normal',
                                                        marginBottom: '50px'
                                                    }}>
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="pagination" style={{ margin: '60px' }}>
                    <Stack spacing={2}>
                        <Pagination
                            count={10}
                            variant="outlined"
                            shape="rounded"
                            showFirstButton
                            showLastButton
                            boundaryCount={1} // Display First and Last buttons
                            style={customStyle}
                            renderItem={(item) =>
                                item.type === 'previous' ? (
                                    <PaginationItem {...item} style={{ height: '50px', width: '50px', color: '#dc3545', fontWeight: 'bold', }} icon="First" />
                                ) : item.type === 'next' ? (
                                    <PaginationItem {...item} style={{ height: '50px', width: '50px', color: '#dc3545', fontWeight: 'bold', }} icon="Last" />
                                ) : (
                                    <PaginationItem {...item} style={{ height: '50px', width: '50px', color: '#dc3545', fontWeight: 'bold', }} />
                                )}
                        />
                    </Stack>
                </div>
            </div>
        </div >
    )
}
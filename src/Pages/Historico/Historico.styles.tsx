import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from '@mui/material/styles';
import { Dialog } from "@mui/material";

export const DataGridEstilizado = styled(DataGrid)(({ theme }) => ({
    boxShadow: "5px 5px 10px 0 #00000025",
    "& .titulo-tabela .MuiDataGrid-columnHeaderTitleContainer": {
        color: "#595959",
        justifyContent: "flex-start",

        "& .MuiDataGrid-columnHeaderTitleContainerContent": {
            marginLeft: "5px"
        }
    },

    "& .atrasado": {
        color: "red"
    },

    "& .em-aguardo": {
        color: "#595959"
    },

    "& .em-andamento": {
        color: "#FFD600"
    },

    "& .concluido": {
        color: "#00612E"
    },

    '& .celula-grid': {
        justifyContent: "center",

        "& span": {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        },

        "&:hover": {
            color: '#00579d'
        }
    },

    "& .ultima .MuiDataGrid-columnSeparator": {
        display: "none"
    },

    "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        "& .MuiTablePagination-selectLabel, .MuiInputBase-root .MuiSelect-select, .MuiTablePagination-displayedRows, .MuiTablePagination-actions button": {
            color: "#595959",
            "&:hover": {
                color: "#00579d"
            }
        }
    },

    "& .MuiDataGrid-main ": {
        "& .MuiDataGrid-virtualScroller": {
            "&::-webkit-scrollbar ": {
                width: "10px",
                height: "10px",
                backgroundColor: "white"
            },

            "::-webkit-scrollbar-thumb": {
                background: "#bababa",
                borderRadius: "15px",
            },
        }
    },

    [`& .${gridClasses.row}.even`]: {
        backgroundColor: theme.palette.grey[200],

        '&:hover, &.Mui-hovered': {
            backgroundColor: alpha(theme.palette.primary.main, 0.2)
        },

        '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.primary.main, 0.2 + theme.palette.action.selectedOpacity),
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    0.2 +
                    theme.palette.action.selectedOpacity +
                    theme.palette.action.hoverOpacity,
                )
            },
        },
    },
}));

export const GridToolbarContainerEstilizado = styled(GridToolbarContainer)({
    "& button": {
        color: "#00579d"
    }
})

export const GridToolbarFilterButtonEstilizado = styled(GridToolbarFilterButton)({

})

export const GridToolbarColumnsButtonEstilizado = styled(GridToolbarColumnsButton)({
    marginLeft: "30px"
})

export const GridToolbarExportEstilizado = styled(GridToolbarExport)({
    marginLeft: "30px",

})

export const Modal = styled(Dialog)({
    '& .MuiPaper-root': {
        height: "80vh", width: "80vw"
    }
})

import { Box, Button, Grid, IconButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteCard from "../components/Notespage/NoteCard/NoteCard";
import { createNotes, getNotes } from "../Redux/notes/note.actions";
import { FaPlus } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
export default function NotesPage() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.noteReducer);
  console.log(data);
  const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  useEffect(() => {
    setNotes(data);
  }, [data]);

  const createNote =()=>{
    dispatch(createNotes({title,body}))
    onClose()
  }

  return (
    <Box mt={20} padding={8}>
      <Grid
        gap={10}
        w={"90%"}
        margin={"auto"}
        gridTemplateColumns="repeat(4 ,1fr)"
      >
        {notes?.map((el) => (
          <NoteCard {...el} />
        ))}
      </Grid>

      <>
    
<IconButton boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px;"} position={"fixed"} w={"60px"} h={"60px"} borderRadius={50} bg={"skyblue"}
       bottom={0} right={0} onClick={onOpen} margin={16} icon={<FaPlus/>}></IconButton>

      

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontFamily={"cursive"}>Create New Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

                <Input  value={title}m placeholder="Please enter title" fontFamily={"cursive"} onChange={(e)=>setTitle(e.target.value)}></Input>
                <Textarea mt={8} value={body} placeholder={'Please enter description'} fontFamily={"cursive"} onChange={(e)=>setBody(e.target.value)}></Textarea>
              
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createNote} fontFamily={"cursive"}>
                Create
              </Button>
              <Button onClick={onClose} fontFamily={"cursive"}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
}



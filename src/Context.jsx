import { createContext, useState, useEffect, useRef } from "react";
import { eventData } from "./data";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [tickets, setTickets] = useState(eventData);
    const [isTicketOpen, setIsTicketOpen] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isManageBtn, setIsManageBtn] = useState(null);
    const [selectedEventIndex, setSelectedEventIndex] = useState(0);
    const [isTransferOpen, setIsTransferOpen] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [sendForm, setSendForm] = useState(false);
    const [isIndexSelected, setIsIndexSelected] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transX, setTransX] = useState('');
    const [screenSize, setScreenSize] = useState('medium'); // 'small', 'medium', 'large'
    const carouselRef = useRef(null);

    const firstEvents = tickets.map(item => item[0]);
    const eventIndex = tickets[selectedEventIndex];

    // Screen size detection
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 390) {
                setScreenSize('small');
            } else if (width > 414) {
                setScreenSize('large');
            } else {
                setScreenSize('medium');
            }
        };

        // Set initial screen size
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Translation values for different screen sizes
    const getTranslateX = (index, size) => {
        const translations = {
            small: {
                0: '25px',
                1: '-286px',
                2: '-594px',
                3: '-903px',
                4: '-1212px',
                5: '-1776px',
                6: '-2133px',
                7: '-2497px',
                8: '-2859px',
                9: '-3220px'
            },
            medium: {
                0: '25px',
                1: '-312px',
                2: '-651px',
                3: '-991px',
                4: '-1326px',
                5: '-1518px',
                6: '-1825px',
                7: '-2134px',
                8: '-2442px',
                9: '-2749px'
            },
            large: {
                0: '25px',
                1: '-312px',
                2: '-654px',
                3: '-992px',
                4: '-1335px',
                5: '-1518px',
                6: '-1825px',
                7: '-2134px',
                8: '-2442px',
                9: '-2749px'
            }
        };

        return translations[size][index] || '25px';
    };

    const handleEventClick = (index) => {
        setSelectedEventIndex(index);
        setIsIndexSelected(true);
        console.log(`${index}`);
    };

    const manageBtn = () => {
        setIsLoading(true);
        setIsManageBtn(true);
    };

    const returnToManageBtn = () => {
        setIsLoading(false);
        setIsManageBtn(false);
    };

    const homeBtn = () => {
        setIsTicketOpen(false);
        setIsLoading(false);
        setIsManageBtn(false);
    };

    const handleCheckboxChange = (seatIndex) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(seatIndex)
                ? prevSelected.filter((index) => index !== seatIndex)
                : [...prevSelected, seatIndex]
        );
    };

    const handleSelectAll = () => {
        const { transfers } = eventIndex[0];
        const ticketList = transfers.ticketId ? transfers.ticketId : transfers.seats;

        if (selectedItems.length === ticketList.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(ticketList.map((_, index) => index));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Seats:", selectedItems);
    };

    const handleIndexClose = () => {
        setIsIndexSelected(false);
        setCurrentIndex(0);
    };

    const closeTransfer = () => {
        setIsTransferOpen(false);
        setSelectedItems([]);
    };

    const closeSendInfo = () => {
        setSendForm(null);
        setSelectedItems([]);
    };

    const handleTicketbtn = (index) => {
        const newIndex = index ?? 0;
        setCurrentIndex(newIndex);
        
        // Get the appropriate translateX value based on current screen size
        const translateValue = getTranslateX(newIndex, screenSize);
        setTransX(translateValue);
    };

    // Update translateX when screen size changes (for current index)
    useEffect(() => {
        if (currentIndex !== null && currentIndex !== undefined) {
            const translateValue = getTranslateX(currentIndex, screenSize);
            setTransX(translateValue);
        }
    }, [screenSize, currentIndex]);

    useEffect(() => {
        if (currentIndex === null || currentIndex === undefined) {
            setCurrentIndex(0);
            setTransX(getTranslateX(0, screenSize));
        }
    }, [currentIndex, screenSize]);

    useEffect(() => {
        let timeoutId;
        
        if (isLoading) {
            timeoutId = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isLoading]);

    return (
        <GlobalContext.Provider value={{
            closeSendInfo,
            closeTransfer,
            handleIndexClose,
            selectedItems,
            handleTicketbtn,
            currentIndex,
            transX,
            screenSize, // Expose screen size if needed elsewhere
            isTicketOpen,
            setIsTicketOpen,
            manageBtn,
            homeBtn,
            isManageBtn,
            isLoading,
            returnToManageBtn,
            tickets,
            selectedEventIndex,
            isTransferOpen,
            firstEvents,
            handleCheckboxChange,
            handleSelectAll,
            handleSubmit,
            setSendForm,
            sendForm,
            handleEventClick,
            isIndexSelected,
            eventIndex,
            setIsTransferOpen
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
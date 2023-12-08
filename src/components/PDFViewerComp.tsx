'use client'
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#fff",
        color: "#1C2120",
    },

    // viewer: {
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    // },

    container: {
        flex: 1,
        padding: 40,
    },

    designBar: {
        width: 140,
        height: 30,
        backgroundColor: "#EEB209",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        marginTop: 10,
    },

    logo: {
        width: 140,
        height: 140,
    },

    heading1: {
        fontSize: 40,
        fontWeight: "black",
        paddingTop: 20,
        color: "#202B40",
        // fontFamily: 'Oswald',
    },

    heading2: {
        fontSize: 18,
        fontWeight: "black",
        paddingTop: 20,
        color: "#202B40",
        // fontFamily: 'Oswald',
    },

    heading3: {
        fontSize: 14,
        fontWeight: 800,
        paddingTop: 20,
        color: "#202B40",
        // fontFamily: 'Oswald',
    },

    text: {
        fontSize: 12,
        color: 'grey',
        // fontFamily: 'Times-Roman',
    }
});

interface PDFViewerProps {
    viewerDimensions: {
        width: number,
        height: number,
    },
    formData: {
        companyName: string,
        address: string,
        phone: number | string,
        email: string,
        signature: string,
    }
}

const PDFViewerComp = (data: PDFViewerProps) => {

    return (
        <PDFViewer style={{ width: data.viewerDimensions.width, height: data.viewerDimensions.height }}>

            <Document>

                <Page size="A4" style={styles.page}>
                    <View
                        style={[
                            {
                                height: 150,
                            },
                        ]}>
                        <View
                            style={[
                                {
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: "space-between",
                                    borderBottom: "2px solid #202B40",
                                    height: 450,
                                },
                            ]}>
                            <View>
                                <View
                                    style={[
                                        {
                                            flex: 1,
                                            flexDirection: 'column',
                                        },
                                    ]}>
                                    <View style={[styles.designBar]} />
                                    <View style={[styles.designBar, { backgroundColor: "#202B40", }]} />
                                    <View style={[styles.designBar]} />
                                </View>
                                <Text style={[styles.heading3, { textAlign: 'center', paddingHorizontal: 40 }]} >Invoice#: 7000225190</Text>
                                <Text style={[styles.heading3, { textAlign: 'center', paddingTop: 0, paddingHorizontal: 40 }]} >Dated: 22 Oct, 2023</Text>
                            </View>
                            <Text style={[styles.heading1, { textAlign: 'center', }]} >Invoice</Text>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image src="/img/bitzstudio-logo.png" style={styles.logo} />
                        </View>
                    </View>

                    <View style={styles.container}>
                        <Text style={[styles.heading2, { paddingTop: 0, }]}>Bill To:</Text>

                        <Text style={styles.heading3}>Company Name</Text>
                        <Text style={styles.text}>{data.formData.companyName}</Text>

                        <Text style={styles.heading3}>Address</Text>
                        <Text style={styles.text}>{data.formData.address}</Text>

                        <Text style={styles.heading3}>Phone Number</Text>
                        <Text style={styles.text}>{data.formData.phone}</Text>

                        <Text style={styles.heading3}>Email</Text>
                        <Text style={styles.text}>{data.formData.email}</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={[styles.heading2, { paddingTop: 0, }]}>Signature</Text>

                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image src={data.formData.signature} style={{ width: 200, height: 100 }} />
                    </View>

                </Page>
            </Document>
        </PDFViewer >
    )
}

export default PDFViewerComp
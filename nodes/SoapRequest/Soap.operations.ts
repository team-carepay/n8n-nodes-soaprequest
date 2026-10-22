import {INodeProperties} from "n8n-workflow";

const requestMethods = [
    {
        name: 'DELETE',
        value: 'DELETE',
    },
    {
        name: 'GET',
        value: 'GET',
    },
    {
        name: 'HEAD',
        value: 'HEAD',
    },
    {
        name: 'OPTIONS',
        value: 'OPTIONS',
    },
    {
        name: 'PATCH',
        value: 'PATCH',
    },
    {
        name: 'POST',
        value: 'POST',
    },
    {
        name: 'PUT',
        value: 'PUT',
    },
];

export const CONVERT_TO_JSON = 'convertToJson';
export const HTTP_HEADERS = 'httpHeaders';
export const METHOD = 'method';
export const SEND_HEADERS = 'sendHeaders';
export const SEND_HTTP_HEADERS = 'sendHttpHeaders';
export const SOAP_BODY = 'soapBody';
export const SOAP_HEADERS = 'soapHeaders';
export const URL = 'url';

export const soapOperations: INodeProperties[] = [
    {
        displayName: 'Method',
        description: 'The request method',
        name: METHOD,
        default: 'GET',
        options: requestMethods,
        type: 'options',
    },
    {
        displayName: 'URL',
        description: 'The request URL',
        default: '',
        name: URL,
        required: true,
        type: 'string'
    },
    {
        displayName: 'Send HTTP Headers',
        name: SEND_HTTP_HEADERS,
        type: 'boolean',
        default: false,
        noDataExpression: true,
        description: 'Whether to send additional HTTP request headers, e.g. SOAPAction. Headers named here override the default Content-Type and Accept headers.',
    },
    {
        displayName: 'HTTP Headers',
        name: HTTP_HEADERS,
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        placeholder: 'Add Header',
        displayOptions: {
            show: {
                sendHttpHeaders: [true]
            },
        },
        default: {},
        options: [
            {
                displayName: 'Header',
                name: 'header',
                values: [
                    {
                        displayName: 'Name',
                        name: 'name',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                    },
                ],
            },
        ],
    },
    {
        displayName: 'Send SOAP Headers',
        name: SEND_HEADERS,
        type: 'boolean',
        default: false,
        noDataExpression: true,
        description: 'Whether the SOAP request has a header section or not',
    },
    {
        displayName: 'SOAP Headers',
        name: SOAP_HEADERS,
        description: 'XML placed inside the &lt;soap:Header&gt; element of the envelope. These are not HTTP headers.',
        type: 'string',
        typeOptions: {
            rows: 3,
            alwaysOpenEditor: false,
            editor: 'jsEditor'
        },
        displayOptions: {
            show: {
                sendHeaders: [true]
            },
        },
        default: '',
    },
    {
        displayName: 'Body',
        default: '',
        name: SOAP_BODY,
        required: true,
        type: 'string',
        typeOptions: {
            rows: 3,
            alwaysOpenEditor: false,
            editor: 'jsEditor'
        }
    },
    {
        displayName: 'Convert Response to Json',
        name: CONVERT_TO_JSON,
        type: 'boolean',
        default: false,
        noDataExpression: true,
        description: 'Whether the SOAP response should be converted to JSON',
    },
];
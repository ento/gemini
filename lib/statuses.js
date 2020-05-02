'use strict'

const CODES = Object.create(null)
const MESSAGES = []

// https://gemini.circumlunar.space/docs/spec-spec.txt, Appendix 1
// https://github.com/michael-lazar/jetforce/blob/5e0fd57f936112746b13b78db807e5bb9e9c94bc/jetforce.py#L76-L106
const INPUT = CODES.INPUT = 10
MESSAGES[INPUT] = 'INPUT'

const SUCCESS = CODES.SUCCESS = 20
MESSAGES[SUCCESS] = 'SUCCESS'
const SUCCESS_END_OF_SESSION = CODES.SUCCESS_END_OF_SESSION = 21
MESSAGES[SUCCESS_END_OF_SESSION] = 'SUCCESS – END OF SESSION'

const REDIRECT_TEMPORARY = CODES.REDIRECT_TEMPORARY = 30
MESSAGES[REDIRECT_TEMPORARY] = 'REDIRECT – TEMPORARY'
const REDIRECT_PERMANENT = CODES.REDIRECT_PERMANENT = 31
MESSAGES[REDIRECT_PERMANENT] = 'REDIRECT – PERMANENT'

const TEMPORARY_FAILURE = CODES.TEMPORARY_FAILURE = 40
MESSAGES[TEMPORARY_FAILURE] = 'TEMPORARY FAILURE'
const SERVER_UNAVAILABLE = CODES.SERVER_UNAVAILABLE = 41
MESSAGES[SERVER_UNAVAILABLE] = 'SERVER UNAVAILABLE'
const CGI_ERROR = CODES.CGI_ERROR = 42
MESSAGES[CGI_ERROR] = 'CGI ERROR'
const PROXY_ERROR = CODES.PROXY_ERROR = 43
MESSAGES[PROXY_ERROR] = 'PROXY ERROR'
const SLOW_DOWN = CODES.SLOW_DOWN = 44
MESSAGES[SLOW_DOWN] = 'SLOW DOWN'

const PERMANENT_FAILURE = CODES.PERMANENT_FAILURE = 50
MESSAGES[PERMANENT_FAILURE] = 'PERMANENT FAILURE'
const NOT_FOUND = CODES.NOT_FOUND = 51
MESSAGES[NOT_FOUND] = 'NOT FOUND'
const GONE = CODES.GONE = 52
MESSAGES[GONE] = 'GONE'
const PROXY_REQUEST_REFUSED = CODES.PROXY_REQUEST_REFUSED = 53
MESSAGES[PROXY_REQUEST_REFUSED] = 'PROXY REQUEST REFUSED'
const BAD_REQUEST = CODES.BAD_REQUEST = 59
MESSAGES[BAD_REQUEST] = 'BAD REQUEST'

const CLIENT_CERT_REQUIRED = CODES.CLIENT_CERT_REQUIRED = 60
MESSAGES[CLIENT_CERT_REQUIRED] = 'CLIENT CERTIFICATE REQUIRED'
const TRANSIENT_CERT_REQUESTED = CODES.TRANSIENT_CERT_REQUESTED = 61
MESSAGES[TRANSIENT_CERT_REQUESTED] = 'TRANSIENT CERTIFICATE REQUESTED'
const AUTHORISED_CERT_REQUIRED = CODES.AUTHORISED_CERT_REQUIRED = 62
MESSAGES[AUTHORISED_CERT_REQUIRED] = 'AUTHORISED CERTIFICATE REQUIRED'
const CERTIFICATE_NOT_ACCEPTED = CODES.CERTIFICATE_NOT_ACCEPTED = 63
MESSAGES[CERTIFICATE_NOT_ACCEPTED] = 'CERTIFICATE NOT ACCEPTED'
const FUTURE_CERT_REJECTED = CODES.FUTURE_CERT_REJECTED = 64
MESSAGES[FUTURE_CERT_REJECTED] = 'FUTURE CERTIFICATE REJECTED'
const EXPIRED_CERT_REJECTED = CODES.EXPIRED_CERT_REJECTED = 65
MESSAGES[EXPIRED_CERT_REJECTED] = 'EXPIRED CERTIFICATE REJECTED'

module.exports = {
	CODES,
	MESSAGES,
}
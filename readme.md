# Flexmonster Failure Repro
This is a node server that, when flexmonster is connected to it, demonstrates an edge failure case when connecting flexmonster to a streaming data source.

For some reason, if there's a gap of 4+ seconds between the last JSON object emitted on the stream and the end of the stream (as can happen when connecting to a streaming database connection), the "loading" state will simply hang, even after the XmlHttpRequest that underlies it has successfully completed (you can assert this by dumping the heap in chrome and finding the XHR, `readyState` will be `=== 4`).

Emitting another object right at the end seems to provide a workaround.
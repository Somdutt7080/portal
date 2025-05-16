"use client";
import { useParams } from 'next/navigation'
import { customers } from '../data'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
export default function CustomerPage() {
  const { id } = useParams()
  const customer = customers.find((c) => c.id === id)
  const [tab, setTab] = useState('leads')
  if (!customer) return <div>Customer not found</div>
  const fullAddress = customer.deliveryAddress
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">← {customer.fullName}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Basic Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 text-sm gap-y-3">
            <div><strong>Customer ID</strong><br />{customer.shippingAddress}</div>
            <div><strong>Full Name</strong><br />{customer.fullName} <Badge variant="outline">✓</Badge></div>
            <div><strong>Email</strong><br />{customer.email}</div>
            <div><strong>Phone no.</strong><br />{customer.phone}</div>
            <div><strong>Joined Date</strong><br />{customer.joinedDate}</div>
            <div><strong>Business Name</strong><br />{customer.businessName}</div>
            <div><strong>Shipping address</strong><br />{customer.shippingAddress}</div>
            <div><strong>OPCO</strong><br />{customer.opco}</div>
            <div><strong>Delivery Address</strong><br />{fullAddress}</div>
            <div><strong>Address Verification</strong><br />Verified on : {customer.addressVerificationDate}</div>
            <div><strong>Tax exemption</strong><br />{customer.taxExemption ? 'Yes' : 'No'}</div>
          </CardContent>
        </Card>
        {/* Right Section */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Select defaultValue={customer.userstatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Disabled">Disabled</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Subscription Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 text-sm gap-y-3">
              <div><strong>Current Plan</strong><br />{customer.currentPlan}</div>
              <div><strong>Billing Cycle</strong><br />{customer.billingCycle}</div>
              <div><strong>Start Date</strong><br />{customer.startDate}</div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Tabs */}
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="leads">Leads Bought ({customer.leads.length})</TabsTrigger>
          <TabsTrigger value="orders">Order History ({customer.ordersHistory.length})</TabsTrigger>
          <TabsTrigger value="routesBought">Routes Bought ({customer.routesBought.length})</TabsTrigger>
          <TabsTrigger value="routesListed">Routes Listed ({customer.routesListed.length})</TabsTrigger>
        </TabsList>
        {/* Leads Bought */}
        <TabsContent value="leads">
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Leads Bought</CardTitle>
              <Input placeholder="Search" className="w-64" />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Purchased on</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Location type</TableHead>
                    <TableHead>Business Name</TableHead>
                    <TableHead>Occupancy count</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customer.leads.map((lead, index) => (
                    <TableRow key={index}>
                      <TableCell>{lead.purchasedOn}</TableCell>
                      <TableCell>{lead.location}</TableCell>
                      <TableCell>{lead.locationType}</TableCell>
                      <TableCell>{lead.businessName}</TableCell>
                      <TableCell>{lead.occupancyCount}</TableCell>
                      <TableCell>{lead.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Other tabs (orders, routesBought, routesListed) can follow same pattern */}
        <TabsContent value="orders">
          <p>Order History coming soon...</p>
        </TabsContent>
        <TabsContent value="routesBought">
          <p>Routes Bought coming soon...</p>
        </TabsContent>
        <TabsContent value="routesListed">
          <p>Routes Listed coming soon...</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}











